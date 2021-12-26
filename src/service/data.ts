import { Quiz, Question } from "../Types/QuizTypes";

export const quiz = async(category: string, amount: string, difficulty: string): Promise<Question[]> => {
    const quiz = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`);
    let {results} = await quiz.json();

    //Declaring a function to shuffle the array of wrong and correct answers
    const getShuffledArr = (arr: string[] | number[]) => {
        const newArr = arr.slice();
        for (let i = newArr.length - 1; i > 0; i--) {
            const rand = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
        }
        return newArr;
    };

    const data: Question[] = results.map( (questions: Quiz) => {
        return{
            question: questions.question,
            answer: questions.correct_answer,
            options: getShuffledArr( [...questions.incorrect_answers, questions.correct_answer] ),
            
        }
    });
    return data;
}

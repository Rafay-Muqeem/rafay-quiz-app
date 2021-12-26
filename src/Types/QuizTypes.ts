export type Quiz = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string
}

export type Question = {
    question: string,
    answer: string,
    options: string[]
}

export interface questionCard  {
    Data: Question ,
    callBack: (e:React.FormEvent<EventTarget>, ans:string, set:any )=> void
}

export interface choice {
    fixer: (category: string, amount: string, difficulty: string) => void
}
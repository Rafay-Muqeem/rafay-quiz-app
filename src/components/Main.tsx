import React, { useEffect, useState } from "react";
import '../App.css';
import { quiz } from "../service/data";
import QuestionCard from "./QuestionCard";
import Loader from "./Loader";
import { Question } from "../Types/QuizTypes";
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from "@material-ui/core";
import { Notification } from "../service/notification";
import UserChoices from "./UserChoices";


const useStyles = makeStyles({
    root: {
      minWidth: 200,
      width: "50%",
      margin: "0 auto",
      borderRadius: "10px"
    },
    card: {
      textAlign: "center",
      margin: "10px auto",
    },
});

const Main = () => {

    const classes = useStyles();

    let [data, setData] = useState<Question[]>([]);
    let [quesNum, setQuesNum] = useState<number>(0);
    let [score, setScore ]= useState<number>(0);
    let [flag, setFlag] = useState<boolean>(false);
    let [choice, setChoice] = useState<boolean>(false);

    const [category, setCategory] = useState<string>('');
    const [difficulty, setDifficulty] = useState<string>('');
    const [amount, setAmount] = useState<string>('');

    useEffect( () => {

        setData([]);

        async function quizData() {
            const results: Question[] = await quiz(category, amount, difficulty);
            setData(results);
        }

        console.log("!!");
        quizData();
        setQuesNum(0);
        setScore(0);
        setFlag(false);
            
    },[category, amount, difficulty]);

    const setChoices = (cate: string, amnt: string, dfclty: string) => {
        if(cate === '' || amnt === '' || dfclty === ''){
            alert("Select the following!");
            setChoice(false);
        }
        else{
            setCategory(cate);
            setDifficulty(dfclty);
            setAmount(amnt);

            setChoice(true);
        }
        
    }

    const handleSubmit = (e:React.FormEvent<EventTarget>, ans:string, set: any) => {
        e.preventDefault();

        if(ans === ''){
            alert("Select an option!!");
        }
        else{

            if(ans === data[quesNum].answer){
                setScore(++score);
            }

            if(quesNum !== data.length - 1){
                setQuesNum(++quesNum);
            }
            else{
                setFlag(true);
                Notification();
            }

            set('');
        }
            
    }

    if(!choice){
        return(
            <UserChoices fixer={setChoices} />
        );
    }
    
    if(flag){
        return(
            <Card className={classes.root} >
                <div className={classes.card}>
                    <h1>Your Score : {score}</h1>
                    <Button variant="contained" color="primary" onClick={ () => setChoice(false) } >Start again</Button>
                </div>
            </Card>
        ) 
    }

    if(!data[quesNum]){
        return <Loader />
    }
    
    return(
        <div>
            <QuestionCard Data={data[quesNum]} callBack={handleSubmit} />
        </div>
    );
}

export default Main;
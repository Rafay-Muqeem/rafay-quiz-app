import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { FormControl, RadioGroup, FormControlLabel, Radio, Typography } from '@material-ui/core';
import { questionCard } from '../Types/QuizTypes';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    width: "50%",
    margin: "0 auto",
    borderRadius: "10px"
  },
  card: {
    textAlign: "center",
    margin: "0 auto",
  }
});

const QuestionCard: React.FC<questionCard> = ( {Data, callBack}) => {

  const [value, setValue] = useState('');


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  let [answ, setAnsw] = useState<string>('');
  
  const Selected = (ev: any) => {
    setAnsw(ev.target.value);
  }

  const classes = useStyles();
 
  return (
    <Card className={classes.root}>
      <CardContent className={classes.card}>
        <div >
          <Typography component="h2" >{Data.question}</Typography>
        </div>
        <FormControl component="form" onSubmit={(e: React.FormEvent<EventTarget>) => callBack(e, answ, setAnsw ) }>
            
          {Data.options.map( (option: string | number, ind:number) => {
            return (
              <div key={ind}>

                <RadioGroup value={value} onChange={handleChange}  >
                  <FormControlLabel  value={option} control={<Radio color="primary" />} label={option} onChange={Selected}  />
                </RadioGroup>
                
              </div>
            )
          })}
            
          <Button type="submit" variant="contained" color="primary" >Submit</Button>
        </FormControl>
      </CardContent>
    </Card>
  );
}

export default QuestionCard;



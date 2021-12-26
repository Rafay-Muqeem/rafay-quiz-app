import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { choice } from '../Types/QuizTypes';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    main: {
        textAlign: "center",
        margin: "0 auto",
        paddingBottom: "10px",
        width: "50%",
        backgroundColor: "white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    form: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        // flexDirection: "row"
    }
}));

const UserChoices: React.FC<choice> = ({fixer}) => {

    const classes = useStyles();
    const [category, setCategory] = useState<string>('');
    const [difficulty, setDifficulty] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
  
    return (
        <div className={classes.main}>
            <h1>Select the following</h1>
            <div className={classes.form}>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    onChange={(e) => setCategory((e.target as HTMLInputElement).value)}
                >
                    <MenuItem value={"9"}>General Knowledge</MenuItem>
                    <MenuItem value={"10"}>Entertainment: Books</MenuItem>
                    <MenuItem value={"11"}>Entertainment: Film</MenuItem>
                    <MenuItem value={"12"}>Entertainment: Music</MenuItem>
                    <MenuItem value={"13"}>Entertainment: Musicals and Theatres</MenuItem>
                    <MenuItem value={"14"}>Entertainment: Television</MenuItem>
                    <MenuItem value={"15"}>Entertainment: Video Games</MenuItem>
                    <MenuItem value={"16"}>Entertainment: Board Games</MenuItem>
                    <MenuItem value={"17"}>Science and nature</MenuItem>
                    <MenuItem value={"18"}>Science: Computers</MenuItem>
                    <MenuItem value={"19"}>Science: Mathematics</MenuItem>
                    <MenuItem value={"20"}>Mythology</MenuItem>
                    <MenuItem value={"21"}>Sports</MenuItem>
                    <MenuItem value={"22"}>Geography</MenuItem>
                    <MenuItem value={"23"}>History</MenuItem>
                    <MenuItem value={"24"}>Politics</MenuItem>
                    <MenuItem value={"25"}>Art</MenuItem>
                    <MenuItem value={"26"}>Celevrities</MenuItem>
                    <MenuItem value={"27"}>Animals</MenuItem>
                    <MenuItem value={"28"}>Vehicles</MenuItem>
                    <MenuItem value={"29"}>Entertainment: Comics</MenuItem>
                    <MenuItem value={"30"}>Science Gadgets</MenuItem>
                    <MenuItem value={"31"}>Entertainment: Japenese Anime and Manga</MenuItem>
                    <MenuItem value={"32"}>Entertainment: Cartoon and Animations</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Amount</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={amount}
                    onChange={(e) => setAmount((e.target as HTMLInputElement).value)}
                >
                    <MenuItem value={"10"}>10</MenuItem>
                    <MenuItem value={"20"}>20</MenuItem>
                    <MenuItem value={"30"}>30</MenuItem>
                    <MenuItem value={"40"}>40</MenuItem>
                    <MenuItem value={"50"}>50</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={difficulty}
                    onChange={(e) => setDifficulty((e.target as HTMLInputElement).value)}
                >
                    <MenuItem value={"easy"}>Easy</MenuItem>
                    <MenuItem value={"medium"}>Medium</MenuItem>
                    <MenuItem value={"hard"}>Hard</MenuItem>
                </Select>

            </FormControl>
            </div>

            <Button onClick={ () => fixer(category, amount, difficulty)} type="submit" variant="contained" color="primary" >Start Quiz</Button>

        </div>
    );

}

export default UserChoices;

import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from './AddUser.module.css';

const AddUser = props => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    function addUserHandler(event) {
        event.preventDefault();
        setEnteredUserName('');
        setEnteredAge('');
        console.log(enteredUserName, enteredAge)
    }

    function userNameChangeHandler(event) {
        setEnteredUserName(event.target.value);
    }

    function ageChangeHandler(event) {
        setEnteredAge(event.target.value);
    }

    return (
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={userNameChangeHandler} value={enteredUserName}/>
            <label htmlFor="Age">Age</label>
            <input type="number" id="age" onChange={ageChangeHandler} value={enteredAge}/>
            <Button type="submit">Add user</Button>
        </form>
    </Card>
    )
}

export default AddUser;
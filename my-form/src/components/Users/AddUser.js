import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from './AddUser.module.css';

const AddUser = props => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    function addUserHandler(event) {
        event.preventDefault();
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
            <input type="text" id="username" onChange={userNameChangeHandler}/>
            <label htmlFor="Age">Age</label>
            <input type="number" id="age" onChange={ageChangeHandler}/>
            <Button type="submit">Add user</Button>
        </form>
    </Card>
    )
}

export default AddUser;
import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    function addUserHandler(event) {
        event.preventDefault();
        if (enteredAge.trim().length === 0 || enteredUserName.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    }

    function userNameChangeHandler(event) {
        setEnteredUserName(event.target.value);
    }

    function ageChangeHandler(event) {
        setEnteredAge(event.target.value);
    }

    return (
        <div>
    <ErrorModal title="An error occured" message="Something went wrong"/>
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={userNameChangeHandler} value={enteredUserName}/>
                <label htmlFor="Age">Age</label>
                <input type="number" id="age" onChange={ageChangeHandler} value={enteredAge}/>
                <Button type="submit">Add user</Button>
            </form>
        </Card>
        </div>
    )
}

export default AddUser;
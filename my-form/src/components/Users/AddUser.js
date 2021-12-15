import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    function addUserHandler(event) {
        event.preventDefault();
        if (enteredAge.trim().length === 0 || enteredUserName.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age'
            });
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
    {error && <ErrorModal title={error.title} message={error.message}/>}
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
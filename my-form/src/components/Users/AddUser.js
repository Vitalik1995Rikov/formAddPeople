import React from "react";
import Card from "../UI/Card";

import classes from './AddUser.module.css';

const AddUser = props => {

    function addUserHandler(event) {
        event.preventDefault();
    }

    return (
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
            <label htmlFor="Age">Age</label>
            <input type="number" id="age" />
            <button type="submit">Add user</button>
        </form>
    </Card>
    )
}

export default AddUser;
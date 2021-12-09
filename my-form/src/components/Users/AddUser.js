import React from "react";

const AddUser = props => {
    return (
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
            <label htmlFor="Age">Age</label>
            <input type="text" id="age" />
        </form>
    )
}

export default AddUser;
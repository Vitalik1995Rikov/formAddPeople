import React from "react";

const UserList = props => {
    return (
        <ul>
            {props.users.map(user => <li></li>)}
        </ul>
    )
}

export default UserList;
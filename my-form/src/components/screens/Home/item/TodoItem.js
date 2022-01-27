import React from "react";
import Check from "./Check";

const TodoItem = ({todo}) => {
    return (
        <div>
            <Check todo={todo}/>
            {todo.title}
        </div>
    )
}

export default TodoItem
import React from "react";
import Check from "./Check";

const TodoItem = ({todo, changeTodo}) => {
    return (
        <button className="flex items-center mb-3 rounded-xl bg-gray-800 w-full"
        onClick={() => changeTodo(todo.id)}>
            <Check isCompleted={todo.isCompleted}/>
            {todo.title}
        </button>
    )
}

export default TodoItem
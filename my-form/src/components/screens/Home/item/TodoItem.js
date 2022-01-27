import React from "react";
import Check from "./Check";
import RemoveIcon from "./RemoveIcon";

const TodoItem = ({todo, changeTodo, removeTodo}) => {
    return (
        <button className="flex items-center mb-3 rounded-xl bg-gray-800 w-full justify-between"
        onClick={() => changeTodo(todo.id)}>
            <span className="flex items-center">
                <Check isCompleted={todo.isCompleted}/>
                <span className={`flex ${ todo.isCompleted ? 'line-through' : ''}`}>{todo.title}</span>
            </span>
            <RemoveIcon removeTodo={removeTodo} todo={todo}/>
        </button>
    )
}

export default TodoItem
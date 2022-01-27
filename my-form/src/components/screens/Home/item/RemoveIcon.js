import React from "react";
import {GoDiffRemoved} from 'react-icons/go';

const RemoveIcon = ({todo, removeTodo}) => {
    return (
        <div onClick={() => removeTodo(todo.id)}>
            <GoDiffRemoved size={22} className="text-gray-600 hover:text-red-500 mr-2"/>
        </div>
    )
}

export default RemoveIcon
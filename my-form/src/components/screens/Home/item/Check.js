import React from "react";
import { BsCheck } from 'react-icons/bs';

const Check = ({todo}) => {
    return (
        <>
            {todo.isCompleted ? <BsCheck size={24} className="text-gray-900"/> : null}
        </>
            
    )
}

export default Check
import React from "react";
import { BsCheck } from 'react-icons/bs';

const Check = ({isCompleted}) => {
    return (
        <div className={`border-2 rounded-lg border-pink-400 ${isCompleted ? 'bg-pink-400' : ''} w-7 h-7 mr-3 flex items-center justify-center`}>
            {isCompleted ? <BsCheck size={24} className="text-gray-900"/> : null}
        </div>
            
    )
}

export default Check
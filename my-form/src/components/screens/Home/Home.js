import React from "react";

const todos = [
    { 
        title: '1',
        isCompleted: false
    },
    { 
        title: '2',
        isCompleted: false
    },
    { 
        title: '3',
        isCompleted: false
    }
]

const Home = () => {
    return (
        <div className="bg-gray-9100 h-screen text-white">
            {todos.map(todo => <div>{todo.title}</div>)}
        </div>
    )
}

export default Home
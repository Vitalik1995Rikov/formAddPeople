import React from "react";
import TodoItem from "./TodoItem";

const todos = [
    { 
        id: 1,
        title: 'One',
        isCompleted: false
    },
    { 
        id: 2,
        title: 'Two',
        isCompleted: false
    },
    { 
        id: 3,
        title: 'Three',
        isCompleted: false
    }
]

const Home = () => {
    return (
        <div className="bg-gray-9100 h-screen text-white">
            {todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
        </div>
    )
}

export default Home
import React from "react";
import TodoItem from "./item/TodoItem";

const todos = [
    { 
        id: 1,
        title: 'Finish my last project',
        isCompleted: false
    },
    { 
        id: 2,
        title: 'Two',
        isCompleted: true
    },
    { 
        id: 3,
        title: 'Three',
        isCompleted: false
    }
]

const Home = () => {
    return (
        <div className="bg-gray-900 h-screen text-white">
            <h1 className="text-4xl font-bold text-center">Todo for junior</h1>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
        </div>
    )
}

export default Home
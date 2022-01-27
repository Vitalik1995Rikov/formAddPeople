import React from "react";
import { useState } from "react/cjs/react.development";
import TodoItem from "./item/TodoItem";

const data = [
    { 
        id: 1,
        title: 'Finish my last project',
        isCompleted: false
    },
    { 
        id: 2,
        title: 'Think about my next project',
        isCompleted: true
    },
    { 
        id: 3,
        title: 'Learn Next.js',
        isCompleted: false
    }
]

const Home = () => {

    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-8">Todo for junior</h1>
            {todos.map(todo => 
            <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo}/>)}
        </div>
    )
}

export default Home
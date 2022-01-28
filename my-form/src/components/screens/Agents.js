import React from "react";

const data = [
    {
        id: 1,
        name: 'Alex',
        surname: 'Black',
        position: 'manager'
    },
    {
        id: 2,
        name: 'Evgeny',
        surname: 'White',
        position: 'developer'
    },
    {
        id: 3,
        name: 'Jim',
        surname: 'Crosby',
        position: 'engirneer'
    }
]

const Agents = () => {
    return (
        <div>
            <div className="flex justify-center">Agents</div>
            <div className="flex justify-around">
                <h1>Name</h1>
                <h1>Surname</h1>
                <h1>Position</h1>
            </div>
            {data.map(item => (<div>{item.name}</div>))}
        </div>
        

    )
}

export default Agents
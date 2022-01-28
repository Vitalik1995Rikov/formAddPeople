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
            <div className="flex justify-center text-lg font-bold">Agents</div>
            <div className="flex justify-around border-2 border-blue-300 rounded-lg">
                <h1>Name</h1>
                <h1>Surname</h1>
                <h1>Position</h1>
            </div>
            {data.map(item => (
            <div className="flex justify-around my-3">
                <div>
                {item.name}
                </div>
                <div>
                {item.surname}
                </div>
                <div>
                {item.position}
                </div>
            </div>))}
        </div>
        

    )
}

export default Agents
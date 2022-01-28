import React from "react";
import Purchaser from "./Purchaser/Purchaser"

const purchasers = [
    {
        id: 1,
        name: 'Alex',
        photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        photoHome: 'http/',
        opinion: 'Residental real estate may contain either a single family or multifamily structure'
    },
    {
        id: 2,
        name: 'Evgeny',
        photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        photoHome: 'http/',
        opinion: 'Good home'
    },
    {
        id: 3,
        name: 'Jim',
        photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        photoHome: 'http/',
        opinion: 'Bad home, very expensive'
    }
]

const Purchasers = () => {
    return (
        <div className="mt-2">
            {purchasers.map(item => (<Purchaser item={item}/>))}
        </div>
    )
}

export default Purchasers
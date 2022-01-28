import React from "react";
import Purchaser from './Purchaser/Purchaser'


const purchasers = [
    {
        id: 1,
        name: 'Alex',
        photo: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        photoHome: 'http/',
        opinion: 'Residental real estate may contain either a single family or multifamily structure'
    },
    {
        id: 2,
        name: 'Evgeny',
        photo: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        photoHome: 'http/',
        opinion: 'Good home'
    },
    {
        id: 3,
        name: 'Jim',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
        photoHome: 'http/',
        opinion: 'Bad home, very expensive'
    }
]

const Purchasers = () => {
    return (
        <div className="flex flex-col">
            <Purchaser purchasers={purchasers}/>
        </div>
    )
}

export default Purchasers
import React from "react";
import { DiAndroid, DiApple, DiAptana, DiAtlassian } from "react-icons/di";

const Purchaser = ({purchasers}) => {
    return (
        <div className="flex mt-3">
            <div className="w-1/3">
                <ol>{purchasers[0].id} Purchaser</ol>
                <ol>{purchasers[0].name}</ol>
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=220&h=220&q=80" alt="img" />
            </div>
            
            <div className="flex">
                <img className="w-40" src="https://gallery.forum-grad.ru/files/7/1/9/3/5/blackpool-house-04.jpg" alt="img" />
                <ol className="m-10 text-xl">{purchasers[0].opinion}</ol>
            </div>
            
        </div>
    )
}

export default Purchaser
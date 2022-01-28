import React from "react";

const Purchaser = ({purchasers}) => {
    return (
        <div className="flex mt-1">
            <div className="w-1/3 mt-10">
                {/* <ol>{purchasers[0].id} Purchaser</ol> */}
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="img" />
                <ol>{purchasers[0].name}</ol>
            </div>
            <div className="flex">
                <div className="w-1/3"></div>
                {/* <img className="" src="https://cdn.pixabay.com/photo/2016/11/10/21/11/house-1815147__340.png" alt="img"/> */}
                <ol className="text-xl mt-5">{purchasers[0].opinion}</ol>
            </div>
            
        </div>
    )
}

export default Purchaser
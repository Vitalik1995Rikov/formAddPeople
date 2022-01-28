import React from "react";
import { GrAndroid } from "react-icons/gr";

const Purchaser = ({item}) => {
    return (
        <div className="flex mt-3">
            <ol>{item.id} Purchaser</ol>
            <ol>{item.name}</ol>
            <ol>
                <GrAndroid/>
            </ol>
            <ol>Home photo</ol>
            <ol>{item.opinion}</ol>
        </div>
    )
}

export default Purchaser
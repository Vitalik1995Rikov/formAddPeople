import React from "react";

import Description from "../items/Description/Description";
import Purchasers from "../items/Purchasers/Purchasers";

const Home = () => {
    return (
        <div className="p-10">
            <Description/>
            <Purchasers/>
        </div>
    )
}

export default Home
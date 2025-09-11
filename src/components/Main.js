import React, { useState } from "react";
import "./Main.css"
import Products from "./products/Products";

function Main() {
    const [pointsBalance, setPointsBalance]=useState(0)



    return <div className="main">
        <div>
        <h3>Points Balance</h3>
        <p>{pointsBalance}</p>
        </div>
        <div>
        <Products/>
        </div>
    </div>
}

export default Main
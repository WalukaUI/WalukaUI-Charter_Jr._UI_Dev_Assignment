import React, { useState } from "react";
import "./Main.css"

function Main() {
    const [pointsBalance, setPointsBalance]=useState(0)



    return <div className="main">
        <div>Points Box</div>
        <p>{pointsBalance}</p>
    </div>
}

export default Main
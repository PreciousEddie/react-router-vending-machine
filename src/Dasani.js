import React from "react";
import { Link } from "react-router-dom";

function Dasani() {
    return (
        <div>
            <h1>Stay hydrated!</h1>
            <img
                src="https://media2.giphy.com/media/TIM7FLdHw5V2e9PUcN/giphy.gif?cid=ecf05e474zi6t5djdg0jm9bs4nlmhlrmyioie1epug9jotm8&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                alt="Dasani water parody ad from SNL"
            />
            <br></br>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default Dasani;
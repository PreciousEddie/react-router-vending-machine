import React from "react";
import { Link } from "react-router-dom";

function Dasani() {
    return (
        <div>
            <h1>Stay nutty!</h1>
            <img
                src="https://media4.giphy.com/media/QsrgfgwOoB3ad6cG7M/200w.webp"
                alt="peanut mms"
            />
            <br></br>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default Dasani;
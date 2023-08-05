import React from "react";
import { Link } from "react-router-dom";

function Doritos() {
    return (
        <div>
            <h1>Stay cool!</h1>
            <img
                src="https://media2.giphy.com/media/nOwFKsubGMJJC/giphy.gif?cid=ecf05e47bu93usq0h3o2gfsonvjf9rbgzmzzya833owmr98h&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                alt="eating cool ranch doritos in public versus at home"
            />
            <br></br>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default Doritos;
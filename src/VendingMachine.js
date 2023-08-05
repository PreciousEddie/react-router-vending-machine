import React from "react";
import "./VendingMachine.css"
import { Link } from "react-router-dom";

function VendingMachine() {
    return (
        <>
            <h1>Welcome to my vending machines!! Pick a treat!</h1>
            <div className="Vending-Machine-image-container">
                <img
                    className="Vending-Machine-image"
                    src="https://images.unsplash.com/photo-1618506557292-ec1862b3c506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                    alt="vending machine"
                />
                <h3 className="Vending-Machine-first-link"><Link to="/dasani">Dasani</Link></h3>
                <h3 className="Vending-Machine-second-link"><Link to="/doritos">Cool Ranch Doritos</Link></h3>
                <h3 className="Vending-Machine-third-link"><Link to="/peanutmms">Peanut M&Ms</Link></h3>
            </div>
        </>
    )
}

export default VendingMachine;
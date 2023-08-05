import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
        <nav id="sidebar">
            <NavLink
                className="NavBar-NavLink"
                to="/"
            >
                Vending Machine
            </NavLink>
            <NavLink
                className="NavBar-NavLink"
                to="/dasani"
            >
                Dasani
            </NavLink>
            <NavLink
                className="NavBar-NavLink"
                to="/doritos"
            >
                Cool Ranch Doritos
            </NavLink>
            <NavLink
                className="NavBar-NavLink"
                to="/peanutmms"
            >
                Peanut M&Ms
            </NavLink>
        </nav>
    )
};

export default NavBar
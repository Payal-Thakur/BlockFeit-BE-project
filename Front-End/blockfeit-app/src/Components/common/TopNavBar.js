import React from "react";
import { Link, useNavigate } from "react-router-dom";
import blockFeit from "../../Images/Blockfeit-logo.png";
function TopNavBar() {
    let navigate = useNavigate();
    function sendTo(path) {
        navigate(`/${path}`);
    }
    return (
        <div className="_h_navbar">
            <div className="h_logo" onClick={() => sendTo("")}>
                <img src={blockFeit} />
                BlockFeit
            </div>
            <div className="mid_item">
                <a href="/">Home</a>
                <a href="/Contact">Contact</a>
                <a href="/About">About Us</a>
            </div>
            <div className="last_item">
                <a className="_h_login" onClick={() => sendTo("login")}>
                    Login
                </a>
                <a className="_h_register" onClick={() => sendTo("Signup")}>
                    Register
                </a>
            </div>
        </div>
    );
}

export default TopNavBar;

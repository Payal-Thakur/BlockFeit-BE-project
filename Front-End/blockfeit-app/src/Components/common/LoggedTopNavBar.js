import React from "react";
import { Link, useNavigate } from "react-router-dom";
import blockFeit from "../../Images/Blockfeit-logo.png";
function LoggedTopNavBar() {
    let navigate = useNavigate();
    function sendTo(path) {
        navigate(`/${path}`);
    }

    function sendToProfile() {
        const type = localStorage.getItem("type");
        if (type === "customer") {
            navigate("/profile/customer");
        } else if (type === "vendor") {
            navigate("/profile/vendor");
        } else if (type === "manufacturer") {
            navigate("/profile/manufacturer");
        } else {
            navigate("/");
        }
    }

    function logout() {
        localStorage.removeItem("blockFeitToken");
        localStorage.removeItem("blockFeit");
        sendTo("");
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
                <a className="_h_login" onClick={sendToProfile}>
                    Profile
                </a>
                <a className="_h_login" onClick={logout}>
                    Logout
                </a>
            </div>
        </div>
    );
}

export default LoggedTopNavBar;

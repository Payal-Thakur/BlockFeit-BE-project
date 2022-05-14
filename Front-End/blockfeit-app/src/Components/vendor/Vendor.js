import React, { useState } from "react";

import Vhome from "./Vhome.js";
import Vprofile from "./Vprofile";
import Vsell from "./Vsell";
import Vhelp from "./Vhelp";
import "../../style/vendor.css";
import logo from "../../Images/Blockfeit-logo.png";
import Cprofile from "../customer/Cprofile.js";
import TopNavigation from "../common/TopNavigation.js";

function Vendor() {
    let [current, setCurrent] = useState("home");

    function updateView() {
        if (current === "home") return <Vhome />;

        if (current === "add Customer")
            return (
                <a href="http://localhost:3000/Signup" target={"_blank"}>
                    visit this site
                </a>
            );

        if (current === "Sell product") return <Vsell />;

        if (current === "help") return <Vhelp />;

        if (current === "profile") return <Cprofile />;
    }

    function onClick(val) {
        setCurrent(val);
    }

    return (
        <div className="container-fluid">
            <div className="row view">
                <TopNavigation />
            </div>
            <div className="row">
                <div className="row _v_area">
                    <div className="col-2 _side_nav_bar">
                        <img className="_b_logo" src={logo} />
                        <h6 onClick={(e) => onClick("home")}>Home</h6>
                        <h6 onClick={(e) => onClick("add Customer")}>
                            Add Customer
                        </h6>
                        <h6 onClick={(e) => onClick("Sell product")}>
                            Sell Products
                        </h6>
                        <h6 onClick={(e) => onClick("profile")}>Profile</h6>
                        <h6 onClick={(e) => onClick("help")}>Help</h6>
                    </div>
                    <div className="col v_content">
                        {current && updateView()}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Vendor;

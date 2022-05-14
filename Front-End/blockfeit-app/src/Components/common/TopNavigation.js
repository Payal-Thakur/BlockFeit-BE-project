import React, { useState } from "react";
import TopNavBar from "./TopNavBar";
import LoggedTopNavBar from "./LoggedTopNavBar";
import { isLoggedin } from "../Utils.js";

function TopNavigation() {
    let [loggedin, setLoggedIn] = useState(isLoggedin());

    return <>{loggedin ? <TopNavBar /> : <LoggedTopNavBar />}</>;
}

export default TopNavigation;

import React, { useState } from "react";
import "../../style/manufacturer.css";
import logo from "../../Images/Blockfeit-logo.png";

import Mhome from "./Mhome";
import MAddSeller from "./MAddSeller";
import MAddProducts from "./MAddProducts";
import MSellProducts from "./MSellProducts";
import Cprofile from "../customer/Cprofile";

function Manufacturer() {
  let [current, setCurrent] = useState("home");

  function updateView() {
    if (current === "home") return <Mhome />;

    if (current === "add seller") return <MAddSeller />;

    if (current === "add products") return <MAddProducts />;

    if (current === "sell products") return <MSellProducts />;

    if (current === "profile") return <Cprofile />;
  }

  function onClick(val) {
    setCurrent(val);
  }

  return (
    <div className="container-fluid">
      <div className="row view">Heading</div>
      <div className="row">
        <div className="row _m_area">
          <div className="col-2 _side_nav_bar">
            <img className="_b_logo" src={logo} />
            <h6 onClick={(e) => onClick("home")}>Home</h6>
            <h6 onClick={(e) => onClick("add seller")}>Add Seller</h6>
            <h6 onClick={(e) => onClick("add products")}>Add Products</h6>
            <h6 onClick={(e) => onClick("sell products")}>Sell Products</h6>
            <h6 onClick={(e) => onClick("profile")}>Profile</h6>
          </div>
          <div className="col">{current && updateView()}</div>
        </div>
      </div>
    </div>
  );
}
export default Manufacturer;

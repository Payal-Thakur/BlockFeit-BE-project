import React from "react";
import "../../style/Msidebar.css";
//import {Link} from 'react-router-dom';

function Msidebar() {
  return (
    <div class="sidebar">
      <a class="active" href="#home">
        Home
      </a>
      <a href="/MAddSeller">Add Seller</a>
      <a href="/MAddProducts">Add Products</a>
      <a href="/MSellProducts">Sell Products</a>
      <a href="/">Profile</a>
    </div>
  );
}
export default Msidebar;

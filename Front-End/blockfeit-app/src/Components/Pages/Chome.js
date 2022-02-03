import React from "react";
import '../../style/Chome.css';
import{ useNavigate } from "react-router-dom";

function Chome ()
{
  let navigate = useNavigate();
    return ( 
      /*<div className="start"> 
      <div className="sidebar">
        <ul>
            
            <li className="items">
             <button type="button">Home</button> 
              </li>
            <li className="items">
            <button type="button">Profile</button> 
              </li>
            <li className="items">
            <button type="button">Help</button> 
              </li>


           
        </ul>
        </div>


      </div>*/

      <div>
        <div class="sidebar">
  <a  onClick= { () => {navigate ("/Chome")}}>Home</a>
  <a onClick= { () => {navigate ("/Cprofile")}}>Profile</a>
  <a >Product History</a>
  <a onClick= { () => {navigate ("/Chelp")}}>Help</a>
 
</div>

<div class="search-container">
    <form action="">
      <input type="text" placeholder="Enter the Product Id" name="search" />
      <button type="submit"><i class="fa fa-search"></i> Search</button>
    </form>
  </div>

      </div>

      

       
        
    );
}

export default Chome;

/*import React from "react";*/
/*import { MDBCol, MDBIcon } from "mdbreact";

const SearchPage = () => {
  return (
    <MDBCol md="6">
      <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
          <span className="input-group-text purple lighten-3" id="basic-text1">
            <MDBIcon className="text-white" icon="search" />
          </span>
        </div>
        <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
      </div>
    </MDBCol>
  );
}

export default SearchPage;*/


 
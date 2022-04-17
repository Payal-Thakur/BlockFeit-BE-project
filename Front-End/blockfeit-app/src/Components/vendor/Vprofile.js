import React from "react";
import "../../style/Vprofile.css";

function Vprofile() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 shadow-sm px-4">
            <i id="l2" class="fa fa-user fa-2x" aria-hidden="true"></i>
            <div class="box"></div>
            <br></br>
            <h1> Chandrakant Shinde</h1>
            <h4> Vendor</h4>
            <br></br>
            <i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>
            <span class="nav-text">Nashik,Maharashtra</span>
            <br></br>
            <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
            <span class="nav-text">abc@gmail.com</span>
            <br></br>
            <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
            <span class="nav-text">+91 9564127836</span>
            <br></br>
            <i class="fa fa-lock fa-2x" aria-hidden="true"></i>{" "}
            <span class="nav-text">12351</span>{" "}
            <i class="fa fa-eye-slash fa-2x float-right" aria-hidden="true"></i>{" "}
            <br></br>
            <br></br>
            <br></br>
          </div>

          <div class="col-lg-8 shadow-sm px-4  ">
            <div class="wrapper-key">
              <i class="fa fa-key  fa-2x" aria-hidden="true">
                {" "}
                Keys
              </i>
              <hr></hr>
              <div class="form-group row">
                <label class="col-sm-2 control-label" for="id1">
                  <b>Public Key</b>
                </label>
                <div class="col-sm-10">
                  <input
                    class="form-control"
                    type="text"
                    id="id1"
                    placeholder=" Public key "
                  />

                  <div class="adjust1">
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 control-label" for="id2">
                  <b>Private Key</b>
                </label>
                <div class="col-sm-10">
                  <input
                    class="form-control"
                    type="text"
                    id="id2"
                    placeholder="Private Key "
                  />

                  <div class="adjust1">
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="wrapper-transcation1">
          <div class="tab1">
            <i class="fa fa-bars fa-2x"></i>
            <span class="nav-text3"> My Sold Product</span>
          </div>
          <br></br>

          <table class="align">
            <thead>
              <tr>
                <th>Product No</th>
                <th>Transaction Id</th>
                <th>Amount</th>
                <th>Customer</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr id="t1">
                <td> 1</td>
                <td> 45</td>
                <td> 550</td>
                <td> ABC</td>
                <td> Nashik</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Vprofile;
/*import{ useNavigate } from "react-router-dom";
function Cprofile()
{
    let navigate = useNavigate();
    return ( 
        
        <div>
              <div class="sidebar">
                <a onClick= { () => {navigate ("/Chome")}}>Home</a>
                <a onClick= { () => {navigate ("/Cprofile")}}>Profile</a>
                <a >Product Details</a>
                <a onClick= { () => {navigate ("/Chelp")}}>Help</a>

 
              </div>
  
              
              <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-xl-5 mx-auto">
                        
                            <p class="text-muted mb-4"> <h3>Its Customer's Profile</h3> </p>
                            <form>
                            <div class="mb-3">
                                <h6> Name</h6>
                                   <div class="box">
                                       

                                   </div>
                                </div>

                                <div class="mb-3">
                                <h6> Email ID</h6>
                                <div class="box">

                                    </div>
                                </div>
                                
                                <div class="mb-3">
                                <h6> Password</h6>
                                <div class="box">

                                    </div>
                                </div>

                                <div class="mb-3">
                                <h6>User Type</h6>
                                <div class="box">

                                 </div>
                                </div>

                                <div class="mb-3">
                                <h6>Private Key</h6>
                                <div class="box">

                              </div>
                                </div>
                                
                                <div class="mb-3">
                                <h6> Public Key </h6>
                                <div class="box">

                                </div>
                                </div>
                                
                
                                <div class="d-grid gap-2 mt-2">
                                <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" >Update</button>
                                </div>
                                
                                
                                
                            </form>
                        </div>
                    </div>
                </div>
              
       </div>


    );
}


export default Cprofile;*/

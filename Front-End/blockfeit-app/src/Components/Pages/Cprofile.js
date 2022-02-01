import React  from "react";
import '../../style/Cprofile.css';
import{ useNavigate } from "react-router-dom";
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
                                <h6> Email ID</h6>
                                    <input id="inputUserid" type="userid" placeholder="" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-2" />
                                </div>
                                
                                <div class="mb-3">
                                <h6> Password</h6>
                                    <input id="inputPassword" type="password" placeholder="" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                </div>

                                <div class="mb-3">
                                <h6> User Type</h6>
                                <input id="inputPassword" type="password" placeholder="" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                    
                                </div>

                                <div class="mb-3">
                                <h6> Public Key</h6>
                                    <input id="inputUserid" type="userid" placeholder="" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                </div>
                                
                                <div class="mb-3">
                                <h6> Private Key</h6>
                                    <input id="inputUserid" type="userid" placeholder="" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
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


export default Cprofile;

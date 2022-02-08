import React from 'react';
import '../../style/Login.css';
import {Link} from 'react-router-dom';

import{ useNavigate } from "react-router-dom";



function Login(){
    let navigate = useNavigate();
    return(<div>
        <nav class="navbar navbar-expand-lg navbar-white bg-dark">
     <div class ="container-fluid">
        <Link to="/" class="navbar-brand" > Blockfeit </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link active" >Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/About" class="nav-link active"> About </Link>
        </li>
        <li class="nav-item">
        <Link to="/Contact" class="nav-link active"> Contact </Link>
        </li>
    
      </ul>
     
    </div>
  </div>
</nav>
<div className="maincontainer">
<div class="container-fluid">
    <div class="row no-gutter">
       
        <div class="col-md-6 d-none d-md-flex bg-image"></div>
        
        <div class="col-md-6 bg-light">
            <div class="login d-flex align-items-center py-5">
               
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 col-xl-7 mx-auto">
                        
                            <p class="text-muted mb-4"> <h3>Welcome to Blockfeit</h3> </p>
                            <form>
                                <div class="mb-3">
                                <h6> Email ID</h6>
                                    <input id="inputUserid" type="userid" placeholder="" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                </div>
                                
                                <div class="mb-3">
                                <h6> Password</h6>
                                    <input id="inputPassword" type="password" placeholder="Must be at least 6 characters" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                </div>

                                <div class="mb-3">
                                <h6> User Type</h6>
                                <select class="form-select rounded-pill border-0 shadow-sm px-4" aria-label=".form-select-sm example">
                                             <option selected>Select...</option>
                                             <option value="1">Manufacturer</option>
                                             <option value="2">Vendor</option>
                                             <option value="3">Customer</option>
                                </select>
                                    
                                </div>
                
                                <div class="d-grid gap-2 mt-2">
                                <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick= { () => {navigate ("/Chome")}} > Log in</button>
                                </div>
                                
                                <div class="d-grid gap-2 mt-2">
                                    <h6> Don't have an account? Sign up </h6>
                                </div>

                                <div class="d-grid gap-2 mt-2">
                                    <h6> Forgot Password?  </h6>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
);


}

export default Login;

import React from 'react';
import '../../style/Signup.css';

function Signup(){
    return(
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
                                <h6> User ID</h6>
                                    <input id="inputUserid" type="userid" placeholder="" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
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
                                <div class="mb-3">
                                <h6> Password</h6>
                                    <input id="inputPassword" type="password" placeholder="Must be at least 6 characters" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                </div>
                
                                <div class="d-grid gap-2 mt-2">
                                <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"> Log in</button>
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

);
}

export default Signup;

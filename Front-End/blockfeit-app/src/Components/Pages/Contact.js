
import React from 'react';
import '../../style/Contact.css';
import {Link} from 'react-router-dom';

function Contact(){
    return( <div>
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
                        
                            <p class="text-muted mb-4"> <h3>Get In Touch</h3> </p>
                            <form>
                            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""/>
</div>
                             
                            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="emailid" class="form-control" id="exampleFormControlInput1" placeholder=""/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Add details</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
</div>

                                
                
                                <div class="d-grid gap-2 mt-2">
                                <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"> Submit</button>
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

export default Contact;


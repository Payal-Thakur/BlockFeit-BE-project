import React from 'react';
import '../../style/About.css';
import {Link} from 'react-router-dom';

function About(){
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
            <div class="login d-flex align-items-center py-8">
               
                <div class="container">
                    <div class="row-10 col-30">
                        <div class="w3-panel w3-padding-16">
                        
                            <h1 class="h1">About us</h1>
                            
                          <div class="h4">

                          <h4>
                            
    In order to ensure the identification and trace-ability of genuine
    products throughout the supply chain, we plan to implement a fully 
    functional block-chain application system to prevent product counterfeiting.
                            </h4>
                            <br/>

                            <h4>
                            We describe a Block-chain Web Application System with products
                            anti-counterfeiting with an additional smart contract feature
                            that enhances trust between the customer and manufacturer
                            </h4>
                            <br/>


                            <h2 class="p1"> Our Team</h2><br/>
                            <div class="p2">
                              <h6>1) Ritesh Borse</h6>
                              <h6>2) Payal Thakur</h6>
                              <h6>3) Chandrakant Shinde</h6>
                              <h6>4) Kalyani Sonawane</h6>
                            </div>
                              

                            </div>

                          
                             
                            
                            
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

export default About;



import React from 'react';
import '../../style/Home.css';
import {Link} from 'react-router-dom';

import{ useNavigate } from "react-router-dom";
function Home(){
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
         
          <div className="intro-header">
              <div className="container">
      
                  <div className="row">
                      <div className="col-lg-8">
                          <div className="intro-message">   
                              <h1 className="animated slideInLeft">We are protecting people from <span className="highlight">Counterfeits!</span></h1>
                            
                            
                                <ul className="list-inline intro-social-buttons">
                                  <li>
                                       <button className="button2 animated bounceInUp btn btn-info btn-rg" onClick= { () => {navigate ("/Login")}} style={{ float: 'left'}}> <span className="network-name">Log In</span></button>
                                  </li>
                                  
                                  <li>
                                       <button className="button2 animated bounceInUp btn btn-info btn-rg" onClick= { () => {navigate ("/Signup")}} style={{ float: 'right'}}> <span className="network-name">Sign Up </span></button>
                                  </li>
                                 
                              </ul>
                           </div>
                           <div>
                            <h4 className="learn animated bounceInUp">We are building blocks for products anti-counterfeiting, in that way manufacturers can use this system to provide genuine products without having to manage direct-operated stores, which can significantly reduce the cost of product quality assurance.</h4>
                       <i className="arrow animated infinite pulse fa fa-angle-down icon fa-5x"></i>    
                            
                    </div> 
                      </div>
                    <div className="col-lg-4"></div>
                   
                  </div>
      
              </div>
      
          
          </div>
            
        </div>
        );
        }
    
export default Home;
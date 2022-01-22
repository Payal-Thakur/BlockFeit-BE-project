import React from 'react';
import './Home.css';
function Home(){
return(
         
          <div className="intro-header">
              <div className="container">
      
                  <div className="row">
                      <div className="col-lg-8">
                          <div className="intro-message">   
                              <h1 className="animated slideInLeft">We are protecting people from <span className="highlight">Counterfeits!</span></h1>
                            
                            
                                <ul className="list-inline intro-social-buttons">
                                  <li>
                                       <a href="/"><button className="button animated bounceInUp btn btn-info btn-lg"> <span className="network-name">Log In</span></button></a>
                                  </li>
                                  
                                  <li>
                                       <a href="/"><button className="button2 animated bounceInUp btn btn-info btn-rg"> <span className="network-name">Sign Up </span></button></a>
                                  </li>
                                 
                              </ul>
                           
                            <h4 className="learn animated bounceInUp">We are building blocks for products anti-counterfeiting, in that way manufacturers can use this system to provide genuine products without having to manage direct-operated stores, which can significantly reduce the cost of product quality assurance.</h4>
                       <i className="arrow animated infinite pulse fa fa-angle-down icon fa-5x"></i>    
                            
                    </div> 
                      </div>
                    <div className="col-lg-4"></div>
                   
                  </div>
      
              </div>
      
          
          </div>
            
        
        );
        }
    
export default Home;
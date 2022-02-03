import React from 'react';
import '../../style/Mnavbar.css';
//import {Link} from 'react-router-dom';



function Mnavbar(){
return(
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid" >
        <a class="navbar-brand" ></a>
          <form class="d-flex " >
        
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
            
            <div class="col-6 col-md-4 sign-out-wrapper clearfix">
            <a href="/Login" class="sign-out pull-right">
            <i class="fa fa-sign-out"></i>
    <span>Log Out</span>
    
  </a>
</div>
          </form>
        </div>
      </nav>
        
);
}
export default Mnavbar;
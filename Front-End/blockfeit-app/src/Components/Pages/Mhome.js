import React from 'react';
import '../../style/Mhome.css';


function Mhome(){
  
return(
<div class="container">
<div class="row">
  <div class="col-3">
  
    <div className="card bg-custom-1"  >
      <div class="card-body align-items-center " >
        <h4 class="card-title">44545</h4>
        <p class="card-text">Total Manufactured Products </p>
      </div>
    </div>
  </div>
  <div class="col-3">
    <div className="card bg-custom-2">
      
      <div class="card-body">
        <h4 class="card-title">341</h4>
        <p class="card-text">Total Sellers</p>
      </div>
    </div>
  </div>
  <div class="col-3">
    <div class="card bg-custom-3">
     
      <div class="card-body">
        
        <i class="fa fa-comments fa-3x"  />
        
        <p class="card-text">Queries/Reports</p>
      </div>
    </div>
  </div>
 </div>

<div class="row">
  <div class="col-15">
  <div className="card custom-1"  >
  
      <div class="card-body " >
      <i class="fa fa-key fa-2x align-middle float-left"  ></i><span class="nav-text"> Keys</span>
        
        <h5 class="card-text"> <li>Public Key  <div class="btn-group">
    <a class="btn btn-primary btn-email" href="mailto:john.doe@email.com">XSFAGGW</a>
    <button type="button"  class="fa fa copy" data-toggle="tooltip" data-placement="bottom" data-copy="john.doe@email.com" title="Copy to clipboard">
    <i class="fa fa-copy fa-2x align-middle float-left"  ></i> </button> </div></li> 
        <li>Private Key</li> </h5>
      </div>
    </div>
    
    </div> 
  </div>
  <div class="row">
  <div class="col-15">
  <div className="card custom-2"  >
  
      <div class="card-body " >
      <i class="fa fa-bars fa-2x align-middle float-left"  ></i><span class="nav-text"> Keys</span>
        
        <h5 class="card-text"> <li>Public Key</li>
        <li>Private Key</li> </h5>
      </div>
    </div>
    
    </div> 
  </div>
</div>
);






}
export default Mhome;

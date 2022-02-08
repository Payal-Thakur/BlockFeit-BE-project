import React from 'react';
import '../../style/Mhome.css';


function Mhome(){
  
return( <div>

<div class="wrapper">
    <div class="navbar">
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid" >
        <a class="navbar-brand" > Blockfeit</a>
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

    </div> 
   </div>  


  <div class="wrapper">
    <div class="sidebar">

    <a class="active" href="#home">Home</a>
<a href="/MAddSeller">Add Seller</a>
<a href="/MAddProducts">Add Products</a>
<a href="/MSellProducts">Sell Products</a>
<a href="/">Profile</a>
 </div> 
   </div>
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
  <div class="col-3">
  <div className="card custom-2"  >
  
      <div class="card-body " >
      <i class="fa fa-key fa-2x align-middle float-left"  ></i><span class="nav-text"> Keys</span>
      <h5 class="card-text"> 
                       <li>Public Key  <div class="btn-group">
    <a class="btn btn-primary " href="">**************XSFAGGW1514514698164981**********</a>
    <button type="button"  class="fa fa copy" data-toggle="tooltip" data-placement="bottom" data-copy="**************XSFAGGW1514514698164981**********" title="Copy to clipboard">
    <i class="fa fa-copy fa-2x align-middle float-left"  ></i> </button> </div></li> 

    <br></br>   
        <li>Private Key 

        <div class="btn-group">
    <a class="btn btn-primary " href="">**************XSFAGGW1514514698164981**********</a>
    <button type="button"  class="fa fa copy" data-toggle="tooltip" data-placement="bottom" data-copy="**************XSFAGGW1514514698164981**********" title="Copy to clipboard">
    <i class="fa fa-copy fa-2x align-middle float-left"  ></i></button> </div>
          
          
          </li> 
        
        </h5>
        
      </div>
    </div>
    
    </div> 
  </div>
  <div class="row">
  <div class="col-3">
  <div className="card custom-2"  >
  
      <div class="card-body " >
      <i class="fa fa-bars fa-2x align-middle float-left"  ></i><span class="nav-text"> Recent Transactions </span>
      <table class="table table-striped">
  
  <tbody>
    <tr>
      <th scope="row"><div>&#8599;</div></th> 
      <td>Product 1</td>
      <td>Date:13 Jan 21</td>
      <td>23355.0</td>
      <td>Sent</td>
    </tr>
    <tr>
      <th scope="row"><div>&#8601;</div></th>
      <td>Product 2</td>
      <td>Date:13 Jan 21</td>
      <td>15598.0</td>
      <td>Recieved</td>
    </tr>
    <tr>
      <th scope="row"><div>&#9888;</div></th>
      <td>Product 3</td>
      <td>Date:13 Jan 21</td>
      <td>1300</td>
      <td>Failed</td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
    
    </div> 
  </div>
</div>



</div>);






}
export default Mhome;

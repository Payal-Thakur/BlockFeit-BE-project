import React  from "react";
import '../../style/Cprofile.css';


function Cprofile()
{
    return (
 <div> 
        <div class="container">
  <div class="row">
    <div class="col-lg-4 shadow-sm px-4">

            
      <i  id="l1" class="fa fa-user fa-2x" aria-hidden="true"></i>
      
      <div class="box">
       </div>
       <br></br>

       <h1> Chandu Shinde</h1> 
       <h4> Customer</h4>
       <br></br>

       <i class="fa fa-map-marker fa-2x" aria-hidden="true"></i><span class="nav-text">Nashik,Mah</span><br></br>
       <i class="fa fa-envelope fa-2x" aria-hidden="true"></i><span class="nav-text">abc@gmail.com</span><br></br>
       <i class="fa fa-phone fa-2x" aria-hidden="true"></i><span class="nav-text">+91 9564127836</span><br></br>
       <i class="fa fa-lock fa-2x" aria-hidden="true"></i> <span class="nav-text">12351</span> <i class="fa fa-eye-slash fa-2x float-right" aria-hidden="true"></i> <br></br>

        <br></br>
        <br></br>        

        <button type="submit" class="btn1  mb-2  shadow-sm"> Buy Product</button>
      

    </div>

    <div class="col-lg-8 ">
       
    
  
  <div className="card custom-1"  >
  
      <div class="card-body" >
      <i class="fa fa-key fa-2x align-middle float-left"  ></i><span class="nav-text"> Keys</span>
        
        <h5 class="card-text"> 
                       <li>Public Key  <div class="btn-group">
    <a class="btn btn-primary btn-email" href="mailto:john.doe@email.com">XSFAGGW</a>
    <button type="button"  class="fa fa copy" data-toggle="tooltip" data-placement="bottom" data-copy="john.doe@email.com" title="Copy to clipboard">
    <i class="fa fa-copy fa-2x align-middle float-left"  ></i> </button> </div></li> 

    <br></br>
        <li>Private Key 

        <div class="btn-group">
    <a class="btn btn-primary btn-email" href="mailto:john.doe@email.com">XSFAGGW</a>
    <button type="button"  class="fa fa copy" data-toggle="tooltip" data-placement="bottom" data-copy="john.doe@email.com" title="Copy to clipboard">
    <i class="fa fa-copy fa-2x align-middle float-left"  ></i></button> </div>
          
          
          </li> 
        
        </h5>
      </div>
    </div>
    
  
    </div>
   
  </div>

  
   
</div>

<div class="head">

        
<i class="fa fa-bars fa-2x" aria-hidden="true"></i><span class="nav-text"> My Own Product</span>

<br></br>
<br></br>

<table id="alignment">
  <tr>
    <th>Product 1</th>
  </tr>

  <tr>
    <td>

      <ul>
        <li> Transaction Id:</li>
        <li> Amount:</li>
        <li> Seller:</li>
        <li> Location:</li>

      </ul>
    </td>



  </tr>

</table>


 




</div>



</div>
        
    );
}

export default Cprofile;
/*import{ useNavigate } from "react-router-dom";
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
                                <h6> Name</h6>
                                   <div class="box">
                                       

                                   </div>
                                </div>

                                <div class="mb-3">
                                <h6> Email ID</h6>
                                <div class="box">

                                    </div>
                                </div>
                                
                                <div class="mb-3">
                                <h6> Password</h6>
                                <div class="box">

                                    </div>
                                </div>

                                <div class="mb-3">
                                <h6>User Type</h6>
                                <div class="box">

                                 </div>
                                </div>

                                <div class="mb-3">
                                <h6>Private Key</h6>
                                <div class="box">

                              </div>
                                </div>
                                
                                <div class="mb-3">
                                <h6> Public Key </h6>
                                <div class="box">

                                </div>
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


export default Cprofile;*/

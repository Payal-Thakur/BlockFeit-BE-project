import React  from "react";
import '../../style/Cprofile.css';


function Cprofile()
{
    return (
 <div> 
        <div class="container">
  <div class="row">
    <div class="col-lg-4 shadow-sm px-4">
      
      
      <div class="box">
       </div>
       <br></br>

       <h1> Chandu Shinde</h1> 
       <h4> Customer</h4>
       <br></br>

         <h5>Location :  Nashik</h5><br></br>
         <h5>Email    :  abc@gmail.com</h5><br></br>
         <h5>Contact  :  9548623217</h5><br></br>
         <h5>Password :  123456</h5>

        
      

    </div>

    <div class="col-lg-8 shadow-sm px-4">
       <h3 id ="k1"> keys</h3>
       
       <br></br>
       <h4 class="p1">Private Key : </h4> 
       <div class="box">
       </div>
      
       
       
       <h4 class="p1">Public Key   : </h4>
       <div class="box">
       </div>
      

    </div>
   
  </div>

  
   
</div>

<div>
<h3 id="tags"> My Own Product</h3> <br></br>
<table id="alignment">
    <tr>
        <th>Product No</th>
        <th>Product Details</th>
    </tr>
    <tr>
        <td>
            1
        </td>
        <td>sellername: ABC ,
             Amount:600,
             product name: shoes</td>
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

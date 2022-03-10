import axios from "axios";
import { json } from "body-parser";
import React, {useEffect, useState}  from "react";
import '../../style/Cprofile.css';



function Cprofile() {

	let localUser = JSON.parse(localStorage.getItem('blockFeit'));
	let localToken = JSON.parse(localStorage.getItem('blockFeitToken'));
	let [user, setUser] = useState(localUser)

	async function fetchUser() {

	


		console.log(localUser);
		console.log(localToken);

		await fetch(`http://localhost:7000/api/customerprofile?email=${localUser.customer_email}`, {
			method: "GET",
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
				'Authorization' : `Bearer ${localToken}`
              }

        })
        .then(res => res.json())
        .then(data => {  console.log(JSON.stringify(data)); setUser(data.user) })
		.catch(error => {
			console.log("Something went wrong while getting profile " + JSON.stringify(error))
		});



	}

	useEffect( () => {

		fetchUser();
	}, [])















    return (

 	<div> 
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








        <div class="container">
  <div class="row">
    <div class="col-lg-4 shadow-sm px-4">

            
      <i  id="l1" class="fa fa-user fa-2x" aria-hidden="true"></i>
      
      <div class="box">
       </div>
       <br></br>

       <h1></h1> 
       <h4>{user.customer_name}</h4>
       <br></br>

       <i class="fa fa-map-marker fa-2x" aria-hidden="true"></i><span class="nav-text">{`${user.customer_city}, ${user.customer_state}`}</span><br></br>
       <i class="fa fa-envelope fa-2x" aria-hidden="true"></i><span class="nav-text">{user.customer_email}</span><br></br>
       <i class="fa fa-phone fa-2x" aria-hidden="true"></i><span class="nav-text">{`+91 ${user.customer_phone_no}`}</span><br></br>
       <i class="fa fa-lock fa-2x" aria-hidden="true"></i> <span class="nav-text">{user.customer_password}</span> <i class="fa fa-eye-slash fa-2x float-right" aria-hidden="true"></i> <br></br>

        <br></br>
        <br></br>        

        <button type="submit" class="btn1  mb-2  shadow-sm"> Buy Product</button>
      

    </div>

    <div class="col-lg-8 shadow-sm px-4  ">
       
    
  
    <div class ="wrapper-key">
 
 <i class="fa fa-key  fa-2x" aria-hidden="true"> Keys</i>
 <hr></hr>
 <div class="form-group row">
              <label class="col-sm-2 control-label" for="id1"><b>Public Key</b></label>
              <div class="col-sm-10">
                 <input 
				 class="form-control" 
				 type="text"
				  id="id1" 
				  placeholder=" Public key "
				  value={ user.customer_public_key} />

                 <div class="adjust1">
                    
                 <i class="fa fa-eye" aria-hidden="true"  ></i>
                     </div>
                 
              
                  
   </div>
               
       </div>
              <div class="form-group row">
              <label class="col-sm-2 control-label" for="id2"><b>Private Key</b></label>
              <div class="col-sm-10">
                 
                  <input 
				  	class="form-control" 
					type="text" id="id2" 
					placeholder="Private Key"
					value={ user.customer_private_key}
					/>
              
                  
                  <div class="adjust1">
                    
                    <i class="fa fa-eye" aria-hidden="true"  ></i>
                        </div>
                    
              
              </div>
              </div>
 </div>
    
  
    </div>
   
  </div>

  

  <div class ="wrapper-transcation1">

  <div class="tab1"> 

<i class="fa fa-bars fa-2x"> My Own Product</i>
   </div>
   <br></br>
            
     
  <table class="align">
             <thead>
                 <tr>
                     <th>Product No</th>
                     <th>Transaction Id</th>
                     <th>Amount</th>
                     <th>Seller</th>
                     <th>Location</th>

                 </tr>
             </thead>
             <tbody>
                 <tr id="t1">
                     <td> 1</td>
                     <td> 45</td>
                     <td> 550</td>
                     <td> ABC</td>
                     <td> Nashik</td>
                 </tr>
             </tbody>
         </table>
  </div>
   
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

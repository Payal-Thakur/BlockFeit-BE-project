import { TableBody } from '@material-ui/core';

import React from 'react';
import '../../style/Vhome.css';




function Vhome()
{
    return(
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




   <div class="wrapper">
    <div class="sidebar">

    <a class="active" href="#home">Home</a>
<a href="/Signup">Add Customer</a>
<a href="/Vsell">Sell Product</a>
<a href="/Vprofile">Profile</a>
<a href="/Vtrans">Ownership</a>
 </div> 
   </div>






<div class="container">
<div class="row">
  <div class="col-3">
  
    <div className="card_1 bg-custom-11"  >
      <div class="card-body align-items-center " >
        <h4 class="card-title_1">445</h4>
        <p class="card-text_1">Remaining </p>
      </div>
    </div>
  </div>
  <div class="col-3">
    <div className="card_1 bg-custom-22">
      
      <div class="card-body">
        <h4 class="card-title_1">341</h4>
        <p class="card-text_1">Sold</p>
      </div>
    </div>
  </div>
  <div class="col-3">
    <div class="card_1 bg-custom-33">
     
      <div class="card-body">
        
      <i class="fa fa-shopping-cart  fa-2x"  aria-hidden="true"></i>
        
        <p class="card-text_1">Request Products</p>
      </div>
    </div>
  </div>
 </div>
 </div>
 
   

  <div class ="wrapper-key">
 
  <i class="fa fa-key  fa-2x" aria-hidden="true"> Keys</i>
  <hr></hr>
  <div class="form-group row">
               <label class="col-sm-2 control-label" for="id1"><b>Public Key</b></label>
               <div class="col-sm-10">
                  <input class="form-control" type="text" id="id1" placeholder=" Public key " />

                  <div class="adjust">
                     
                  <i class="fa fa-eye" aria-hidden="true"  ></i>
                      </div>
                  
               
                   
    </div>
                
        </div>
               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2"><b>Private Key</b></label>
               <div class="col-sm-10">
                  
                   <input class="form-control" type="text" id="id2" placeholder="Private Key " />
               
                   
                   <div class="adjust">
                     
                     <i class="fa fa-eye" aria-hidden="true"  ></i>
                         </div>
                     
               
               </div>
               </div>
  </div>


  <div class ="wrapper-transcation">
   <table>
   
       <tr>
      <h2><i class="fa fa-bars" aria-hidden="true">  Recent transcations</i></h2> 
       </tr>
       <hr></hr>
       <div class="l1">

       <tr>

       <td class="t">
           <div class="icon">
           
           </div>
        </td>

         <td class="t"> 
            <b> product </b> 
         </td>

         <td class="t"> 
            <b> Date  </b> 
         </td>

         <td class="t"> 
            <b> Amount</b> 
         </td>

         <td class="t"> 
            <b> Status </b> 
         </td>
       </tr>
       <tr>
      
       <td class="t">
           <div class="icon">
           <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
           </div>
        </td>

         <td class="t"> 
            <b> product 1 </b> 
         </td>

         <td class="t"> 
            <b> Date: 13 jan 21</b> 
         </td>

         <td class="t"> 
            <b> 233544.0</b> 
         </td>

         <td class="t"> 
            <b> sent </b> 
         </td>
       </tr>
      


      
      
       <tr type="text">

       <td class="t">
           <div class="icon">
           <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
           </div>
        </td>

         <td class="t"> 
            <b> product 1 </b> 
         </td>

         <td class="t"> 
            <b> Date: 13 jan 21</b> 
         </td>

         <td class="t"> 
            <b> 233544.0</b> 
         </td>

         <td class="t"> 
            <b> received </b> 
         </td>

       </tr>

       <tr type="text">

       <td class="t">
           <div class="icon">
           <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
           </div>
        </td>

         <td class="t"> 
            <b> product 3 </b> 
         </td>

         <td class="t"> 
            <b> Date: 15 jan 21</b> 
         </td>

         <td class="t"> 
            <b> 883544.0</b> 
         </td>

         <td class="t"> 
            <b> Failed </b> 
         </td>
         
       </tr>

       </div>
       
       </table>
  </div>

</div>
    );
    }
export default Vhome;





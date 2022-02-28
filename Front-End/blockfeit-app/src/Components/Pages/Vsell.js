import React from 'react';
import '../../style/Vsell.css';

function Vsell()
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

    <a  href="/Vhome">Home</a>
<a href="/Signup">Add Customer</a>
<a  class="active" href="/Vsell">Sell Product</a>
<a href="/Vprofile">Profile</a>
<a href="/Vtrans">Ownership</a>
 </div> 
   </div>




            <div class="container">
       <div class="row">
            <div class="col-xs-12">
                
                        <form class="form-horizontal" align="center">

       <div class="form-group row">
               <label class="col-sm-2 control-label" for="id1">Product Id </label>
               <div class="col-sm-10">
                   <input class="form-control" type="text" id="id1" placeholder="Enter Product Id " required/>
               </div>
        </div>
               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Retailer Public Key</label>
               <div class="col-sm-10">
                   <input class="form-control" type="text" id="id2" placeholder="Enter Retailer Public Key " required/>
               </div>
               </div>
               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Retailer Private Key</label>
               <div class="col-sm-10">
                   <input class="form-control"  type="text" id="id2" placeholder="Enter Retailer Private Key" required/>
               </div>
               </div>

               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Customer Name </label>
               <div class="col-sm-10">
                   <input class="form-control" type="text" id="id2" placeholder="Enter Customer Name" required/>
               </div>
               </div>

               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Customer Public Key </label>
               <div class="col-sm-10">
                   <input class="form-control" type="text" id="id2" placeholder="Enter Customer Public Key" required/>
               </div>
               </div>

               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Amount</label>
               <div class="col-sm-10">
                   <input class="form-control" type="text" id="id2" placeholder="Enter Amount" required/>
               </div>
               </div>

               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Payment Method</label>
               <div class="col-sm-10">
                   <input class="form-control" type="text" id="id2" placeholder="Enter Payment Method" required/>
               </div>
               </div>

           <div class="container">
               <button type="button" class="btn btn-success" > Sell Product</button>
               
           </div>
       </form> 
   </div>
     </div>
     </div>

        </div>

    );
}
export default Vsell;
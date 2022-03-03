import React from 'react';
import '../../style/MAddProducts.css';

function MAddProducts(){
    return(<div>

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
        
            <a  href="/Mhome">Home</a>
        <a href="/MAddSeller">Add Seller</a>
        <a class="active" href="/MAddProducts">Add Products</a>
        <a href="/MSellProducts">Sell Products</a>
        <a href="/QRcode">Generate QR </a>
        <a href="/">Profile</a>
         </div> 
           </div>
   <div class="container">
       <div class="row">
            <div class="col-xs-12">
                
                        <form class="form-horizontal" align="center">

       <div class="form-group row">
               <label class="col-sm-2 control-label" for="id1">Product Id </label>
               <div class="col-sm-10">
                   <input class="form-control" type="text"  placeholder="Enter Product Id"/>
               </div>
        </div>
               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Product Name</label>
               <div class="col-sm-10">
                   <input class="form-control" type="password"  placeholder="Enter Product Name"/>
               </div>
               </div>
               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Width</label>
               <div class="col-sm-10">
                   <input class="form-control" type="password"  placeholder="Enter Width"/>
               </div>
               </div>

               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Height</label>
               <div class="col-sm-10">
                   <input class="form-control" type="password"  placeholder="Enter Height"/>
               </div>
               </div>
               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Batch</label>
               <div class="col-sm-10">
                   <input class="form-control" type="password"  placeholder="Enter Batch"/>
               </div>
               </div>
               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Size</label>
               <div class="col-sm-10">
                   <input class="form-control" type="password"  placeholder="Enter Size"/>
               </div>
               </div>
               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Date</label>
               <div class="col-sm-10">
                   <input class="form-control" type="password"  placeholder="Enter Date"/>
               </div>
               </div>

               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Manufacturer Private Key</label>
               <div class="col-sm-10">
                   <input class="form-control" type="password" id="id2" placeholder="Enter Manufacturer Private Key"/>
               </div>
               </div>

               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Manufacturer Public Key </label>
               <div class="col-sm-10">
                   <input class="form-control" type="password" id="id2" placeholder="Enter Manufacturer Public Key"/>
               </div>
               </div>
           <div class="container">
               <button type="button" class="btn btn-success"> Add Product</button>
               
           </div>
       </form> 
   </div>
     </div>
     </div>
</div>
   );


}

export default MAddProducts;

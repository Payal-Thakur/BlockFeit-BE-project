import React from 'react';
import '../../style/MAddProducts.css';

function MAddProducts(){
    return(
   <div class="container">
       <div class="row">
            <div class="col-xs-10">
                
                        <form class="form-horizontal" align="center">

       <div class="form-group row">
               <label class="col-sm-3 control-label" for="id1">Product Id </label>
               <div class="col-sm-7">
                   <input class="form-control" type="text"  placeholder="Enter Product Id"/>
               </div>
        </div>
               <div class="form-group row">
               <label class="col-sm-3 control-label" for="id2">Product Name</label>
               <div class="col-sm-7">
                   <input class="form-control" type="password"  placeholder="Enter Product Name"/>
               </div>
               </div>
               <div class="form-group row">
               <label class="col-sm-3 control-label" for="id2">Width</label>
               <div class="col-sm-7">
                   <input class="form-control" type="password"  placeholder="Enter Width"/>
               </div>
               </div>

               <div class="form-group row">
               <label class="col-sm-3 control-label" for="id2">Height</label>
               <div class="col-sm-7">
                   <input class="form-control" type="password"  placeholder="Enter Height"/>
               </div>
               </div>
               <div class="form-group row">
               <label class="col-sm-3 control-label" for="id2">Batch</label>
               <div class="col-sm-7">
                   <input class="form-control" type="password"  placeholder="Enter Batch"/>
               </div>
               </div>
               <div class="form-group row">
               <label class="col-sm-3 control-label" for="id2">Size</label>
               <div class="col-sm-7">
                   <input class="form-control" type="password"  placeholder="Enter Size"/>
               </div>
               </div>
               <div class="form-group row">
               <label class="col-sm-3 control-label" for="id2">Date</label>
               <div class="col-sm-7">
                   <input class="form-control" type="password"  placeholder="Enter Date"/>
               </div>
               </div>

               <div class="form-group row">
               <label class="col-sm-3 control-label" for="id2">Manufacturer Private Key</label>
               <div class="col-sm-7">
                   <input class="form-control" type="password" id="id2" placeholder="Enter Manufacturer Private Key"/>
               </div>
               </div>

               <div class="form-group row">
               <label class="col-sm-3 control-label" for="id2">Manufacturer Public Key </label>
               <div class="col-sm-7">
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

   );


}

export default MAddProducts;

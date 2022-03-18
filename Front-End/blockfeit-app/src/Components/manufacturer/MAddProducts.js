import React, { useState } from 'react';
import '../../style/MAddProducts.css';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

function MAddProducts(){

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const [manuDate, setManuDate] = useState("");
    const [size, setSize] = useState("");
    const [batch, setBatch] = useState("");
    const [ownerId, setOwnerId] = useState("");
    const [productManu, setproductManu] = useState("");
    const [response, setResponse] = useState("");

    
	let localToken = JSON.parse(localStorage.getItem('blockFeitToken'));

    function addProduct(event) {

        event.preventDefault();
        fetch('http://localhost:7000/api/addproduct', {
            method: "POST",
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${localToken}`

              },
            body: JSON.stringify({
                'product_name': name,
                'product_description': description,
                'product_height': height,
                'product_width':  width,
                'product_manufactured_date': manuDate,
                'product_size': size,
                'product_batch': batch,
                'product_owner_id': ownerId,
                'product_manufacturer': productManu 
            })
        })
        .then(res => res.json())
        .then(data => {


            console.log("Add product  " + JSON.stringify(data));
            if(data.err !== undefined) {

                toast.warning(data.message + " " + JSON.stringify(data.err));
                return;
            }

            setResponse(JSON.stringify(data));            
            toast.success("Product Added Successfully!");
        })
        .catch(err => {
            toast.error("Server Error")
            console.log("Something went wrong while Adding product \n Error : " + JSON.stringify(err))
        });

    }






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
              
         </div> 
           </div>
   <div class="container">
       <div class="row">
            <div class="col-xs-12">
                
                        <form class="form-horizontal" align="center">

       <div class="form-group row">
               <label class="col-sm-2 control-label" for="id1">Product Description</label>
               <div class="col-sm-10">
                   <input class="form-control" type="text"  
                        placeholder="product description"
                        value={description}
                        onChange = {e => {
                            setDescription(e.target.value)
                        }}
                   />
               </div>
        </div>
               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Product Name</label>
               <div class="col-sm-10">
                   <input class="form-control" type="text"  placeholder="Enter Product Name"
                   
                        value={name}
                        onChange = {e => {
                            setName(e.target.value)
                        }}
                   />
               </div>
               </div>
               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Width</label>
               <div class="col-sm-10">
                   <input class="form-control" type="text"  placeholder="Enter Width"
                        value={width}
                        onChange = {e => {
                            setWidth(e.target.value)
                        }}
                   />
               </div>
               </div>

               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Height</label>
               <div class="col-sm-10">
                   <input class="form-control" type="text"  placeholder="Enter Height"
                   
                   value={height}
                   onChange = {e => {

                        setHeight(e.target.value)
                   }}
                   />
               </div>
               </div>
               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Batch</label>
               <div class="col-sm-10">
                   <input class="form-control" type="text"  placeholder="Enter Batch"

                        value={batch}
                        onChange = {e => {

                            setBatch(e.target.value)
                        }}

                   />
               </div>
               </div>
               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Size</label>
               <div class="col-sm-10">
                   <input class="form-control" type="text"  placeholder="Enter Size"
                        value={size}
                        onChange = {e => {
     
                             setSize(e.target.value)
                        }}

                   />
               </div>
               </div>
               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Date</label>
               <div class="col-sm-10">
                   <input class="form-control" type="text"  placeholder="Enter Date"
                   
                    value={manuDate}
                    onChange = {e => {

                            setManuDate(e.target.value)
                    }}

                   />
               </div>
               </div>

               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Owner Id</label>
               <div class="col-sm-10">
                   <input class="form-control" type="text" id="id2" placeholder="Owner Id"
                   
                   value={ownerId}
                   onChange = {e => {

                        setOwnerId(e.target.value)
                   }}
                   
                   />
               </div>
               </div>

               <div class="form-group row">
               <label class="col-sm-2 control-label" for="id2">Manufacturer Name</label>
               <div class="col-sm-10">
                   <input class="form-control" type="text" id="id2" placeholder="Enter Manufacturer Name"
                   
                   value={productManu}
                   onChange = {e => {

                        setproductManu(e.target.value)
                   }}

                   />
               </div>
               </div>
           <div class="container">
               <button type="button" class="btn btn-success"
               
                   onClick={addProduct}
               
               > Add Product</button>
               
           </div>
       </form> 
       <h2>{response}</h2>
   </div>
     </div>
     </div>
</div>
   );


}

export default MAddProducts;

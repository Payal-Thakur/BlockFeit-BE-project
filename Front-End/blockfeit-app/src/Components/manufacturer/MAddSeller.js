import React, { useState } from 'react';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

function MAddSeller(){

    const [sellerList, setSellerList] = useState([]);
    const [id, setId] = useState("");
    let localToken = JSON.parse(localStorage.getItem('blockFeitToken'));

    function getRequestedSellerList(event) {

        event.preventDefault();


        fetch('http://localhost:7000/api/requestedvendor', {
            method: "GET",
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
				'Authorization' : `Bearer ${localToken}`
            }
        })
        .then(response => response.json())
        .then(data => {
            
            if(data.vendors.length !== 0) {
                
                setSellerList(data.vendors);
            }else {
                toast.info("No Seller Request is pending")
                setSellerList([])
            }
            
        })
        .catch(err => console.log("Server Error while getting vendorList" + JSON.stringify(err)))
    }
    
    function approveVendorList(event) {
        
        event.preventDefault();
            
            
            fetch('http://localhost:7000/api/approveRequest', {
                method: "POST",
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${localToken}`
                },
                body: JSON.stringify({
                    'vendor_id' : id
                })
            })
            .then(res => res.json())
            .then(data => {
    
    
                if(data.error !== undefined) {
    
                    toast.warning(data.error);
                    return;
                }
    
                toast.success("Vendor Added Successfully Successfully!");
                getRequestedSellerList(event);
            })
            .catch(err => {
                toast.error("SErver error")
                console.log("Something went wrong while adding vendor \n Error : " + JSON.stringify(err))
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
        
            <a href="/Mhome">Home</a>
        <a class="active" href="/MAddSeller">Add Seller</a>
        <a href="/MAddProducts">Add Products</a>
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
                    <label class="col-sm-2 control-label" for="id2">Seller id</label>
                    <div class="col-sm-10">
                        <input 
                            class="form-control" 
                            type="text"
                            id="id2" 
                            placeholder="Enter Seller Public Key"
                            value={id}
                            required
                            onChange = { e => setId(e.target.value)}
                        />
                    </div>
               </div>
           <div class="container">
               <button type="button" class="btn btn-success"

                onClick={ approveVendorList }
               >Add Seller</button>
               <button 
                    type="button"
                    class="btn btn-success"
                    style={{marginLeft: "20px"}}
                    onClick={getRequestedSellerList}
                    
                >Get Requested Seller List</button>
           </div>

       </form> 
        <table>
            <tbody>
                {
                    sellerList.map(seller => {

                        return (<tr>
                            <text>Vendor id: {seller.vendor_id}</text><br/>
                            <text>Vendor public key : {seller.vendor_public_key}</text><br/>
                            <text>Vendor Name : {seller.vendor_name}</text><br/>
                            <text>Vendor Email : {seller.vendor_email}</text><br/>
                            <text>Vendor Mob. no. : {seller.vendor_mobile_no}</text><br/>
                            <text>Vendor City : {seller.vendor_city}</text><br/>
                            <text>Vendor State : {seller.vendor_state}</text><br/>
                            <text>Vendor Shop : {seller.vendor_shop_name}</text><br/><br/><br/>
                        </tr>)
                    })
                }
                {sellerList.length == 0 ? <text>No Pending Requests</text> : <h1/>}
            </tbody>
        </table>

   </div>
     </div>
     </div>
     </div>

   );


}

export default MAddSeller;

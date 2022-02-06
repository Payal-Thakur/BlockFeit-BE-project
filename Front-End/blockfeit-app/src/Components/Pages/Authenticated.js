import React from "react";
import '../../style/Authenticated.css';
import img2 from "../../Images/greentick.png";
import img3 from "../../Images/shoes.png";


function Authenticated()
{
    return(
        <div> 
        <div class="container">
            <div class="row">
                   <div class="col-lg-4 shadow-sm px-4">
                   <img id="i1" src={img2}  alt=""/><br></br> 
                   <br>
                   </br>

                   <h1 id="c4"> AUTHENTICATED! </h1>
                   <div class="pro"> 
                   <h5> Product Name  : ABC</h5>
                    <h5> Product Id   : 123</h5>
                    <h5> Brand Name   : XYZ</h5>
                   </div>
                   <br></br>

                   <h5>
                   The Product is Blockchain Verified.</h5>
                        <h5 id="m1"> Congratulations !! </h5>
                        <br></br>
                   <h5>This guarantees that the product is
                   geneuine & protects consumers
                   against frauds.
                   </h5>
                    


                    </div>
                    <div class="col-lg-8 shadow-sm px-4">

                        <div class="Container">

                            <div class="row">

                                <div class="col-lg-6 px-4">
                                <img id="i1" src={img3}  alt=""/>
                                <div class="pro1"> 
                   <h5> Product Cost: 1000</h5>
                    <h5> Vendor Name: ABC</h5>
                    <h5> Vendor Address: XYZ</h5>
                   </div>

                                </div>


                                <div class="col-lg-4">
                                         <div class="pd"> 
                                      <h4> Product Details:</h4>
                                      <p>
                                       Color: Blue  Outer material: Textile
                                       Model name: Phosphere Occasion: Sports
                                       Leather type: Napa Secondary color: White
                                       Sole material: Rubber 
                                       </p>
                                       </div>     
                                </div>

                            </div>
                            </div>

                            
                   

                     
                          </div>

                         
            </div>
        </div>
        <br></br>

        <h4 id="head">CERTIFIED PRODUCT JOURNEY</h4>

         <table class="align">
             <thead>
                 <tr>
                     <th>Scan Date</th>
                     <th>Transaction Id</th>
                     <th>User Type</th>
                     <th>User Name</th>
                     <th>Location</th>
                 </tr>
             </thead>
             <tbody>
                 <tr id="t1">
                     <td> 12/2/2022</td>
                     <td> 215</td>
                     <td> Customer</td>
                     <td> ABC</td>
                     <td> Nashik</td>
                 </tr>
             </tbody>
         </table>
        </div>

    );
}

export default Authenticated ;
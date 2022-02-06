
import React from 'react';
import '../../style/Contact.css';

function Contact(){
    return(
<div className="maincontainer">
<div class="container-fluid">
    <div class="row no-gutter">
       
        <div class="col-md-6 d-none d-md-flex bg-image"></div>
        
        <div class="col-md-6 bg-light">
            <div class="login d-flex align-items-center py-5">
               
                <div class="container">
                    <div class="row">
                        
                        <div class="col-lg-10 col-xl-7 mx-auto">
                        
                            <p class="text-muted mb-4"> <h3>Get In Touch</h3> </p>
                            <form>
                            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""/>
</div>
                             
                            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
</div>

                                
                
                                <div class="d-grid gap-2 mt-2">
                                <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"> Submit</button>
                                </div>
                                
                               
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

);
}

export default Contact;


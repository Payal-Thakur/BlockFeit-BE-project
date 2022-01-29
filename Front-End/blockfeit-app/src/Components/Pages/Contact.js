
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
                                <h6> Name</h6>
                                    <input id="inputUserid" type="userid" placeholder="" required="" autofocus="" class="form-control  border-0 shadow-sm px-4" />
                                </div>

                                <div class="mb-3">
                                <h6> Email ID</h6>
                                    <input id="inputUserid" type="userid" placeholder="" required="" autofocus="" class="form-control border-0 shadow-sm px-4" />
                                </div>
                                
                                <div class="mb-3">
                                <h6> Message</h6>
                                    <input id="inputmessage" type="password" placeholder="" required=""  class="form-control  border-0 shadow-sm px-4 text-primary" />
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


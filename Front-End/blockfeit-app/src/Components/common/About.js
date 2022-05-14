import React from "react";
import "../../style/About.css";
import { Link } from "react-router-dom";

import img10 from "../../Images/bg.png";
import TopNavBar from "./TopNavBar";
import TopNavigation from "./TopNavigation";
function About() {
    return (
        <div>
            <nav>
                <TopNavigation />
            </nav>
            <div className="maincontainer">
                <div class="container-fluid">
                    <div class="row no-gutter">
                        <div class="col-md-6 d-none d-md-flex ">
                            <img id="k1" src={img10} alt="" />
                        </div>

                        <div class="col-md-6 bg-light">
                            <div class="login d-flex align-items-center py-8">
                                <div class="container">
                                    <div class="row-10 col-30">
                                        <div class="w3-panel w3-padding-16">
                                            <h1 class="h1">About us</h1>

                                            <div class="h4">
                                                <h4>
                                                    In order to ensure the
                                                    identification and
                                                    trace-ability of genuine
                                                    products throughout the
                                                    supply chain, we plan to
                                                    implement a fully functional
                                                    block-chain application
                                                    system to prevent product
                                                    counterfeiting.
                                                </h4>
                                                <br />

                                                <h4>
                                                    We describe a Block-chain
                                                    Web Application System with
                                                    products anti-counterfeiting
                                                    with an additional smart
                                                    contract feature that
                                                    enhances trust between the
                                                    customer and manufacturer
                                                </h4>
                                                <br />

                                                <h2 class="p1"> Our Team</h2>
                                                <br />
                                                <div class="p2">
                                                    <h6>1) Ritesh Borse</h6>
                                                    <h6>2) Payal Thakur</h6>
                                                    <h6>
                                                        3) Chandrakant Shinde
                                                    </h6>
                                                    <h6>4) Kalyani Sonawane</h6>
                                                </div>
                                            </div>
                                        </div>
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

export default About;

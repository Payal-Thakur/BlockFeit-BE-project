import React from "react";
import "../../style/Home.css";
import { Link } from "react-router-dom";
import blockFeit from "../../Images/Blockfeit-logo.png";
import blockFeit1 from "../../Images/bg.png";
import supplyChain from "../../Images/supply-chain.gif";
import productHistory from "../../Images/product-history.gif";
import scanQR from "../../Images/scan-qr.gif";
import verify from "../../Images/verify.gif";
import TopNavigation from "./TopNavigation";
import { useNavigate } from "react-router-dom";

function Home() {
    let navigate = useNavigate();
    function sendTo(path) {
        navigate(`/${path}`);
    }

    return (
        <div className="home__page">
            <TopNavigation />
            <div className="_h_cont">
                <div className="container-flex ">
                    <div className="row">
                        <div className="col col-left">
                            <img src={supplyChain} />
                        </div>
                        <div className="col col-right">
                            <div className="_tag_line">
                                <h1 className="_p_name">BlockFeit,</h1>
                                <ul className="tag_line_list">
                                    <li>Fast</li>
                                    <li>Secure</li>
                                    <li>Transparent</li>
                                    <li>Reliable</li>
                                </ul>
                                <h3 className="_p_name">Supply Chain.</h3>
                            </div>
                            <div className="_featers">
                                <div
                                    onClick={() =>
                                        sendTo("prodouct/product-history")
                                    }
                                    className="_h_product_details home_card"
                                >
                                    <img className="home_gifs" src={scanQR} />
                                    Product Detail
                                </div>
                                <div
                                    onClick={() =>
                                        sendTo("product/verify-ownership")
                                    }
                                    className="_h_product_ownership home_card"
                                >
                                    <img className="home_gifs" src={verify} />
                                    Verify Ownership
                                </div>
                                <div
                                    onClick={() =>
                                        sendTo("prodouct/product-history")
                                    }
                                    className="_h_product_history home_card"
                                >
                                    <img
                                        className="home_gifs"
                                        src={productHistory}
                                    />
                                    Product History
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

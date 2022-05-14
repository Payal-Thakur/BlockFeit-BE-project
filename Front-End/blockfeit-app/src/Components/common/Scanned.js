import React, { useState, useRef, Component } from "react";

import QRCode from "qrcode";
import "../../style/Scanned.css";
import QrReader from "react-qr-reader";

import ProductHistory from "../product/ProductHistory";
import TopNavigation from "./TopNavigation";
import ProductDetail from "../product/ProductDetail";

function Scanned() {
    const [text, setText] = useState("dumy");
    const [reloadHistory, setReloadHistory] = useState(false);
    const [whatShow, setWhatShow] = useState("details");
    const [imageUrl, setImageUrl] = useState("");
    const [inputID, setInputID] = useState("");
    const [scanResultFile, setScanResultFile] = useState("");
    const [scanResultWebCam, setScanResultWebCam] = useState("");
    const qrRef = useRef(null);

    const generateQrCode = async () => {
        try {
            const response = await QRCode.toDataURL(text);
            setImageUrl(response);
        } catch (error) {
            console.log(error);
        }
    };
    const handleErrorFile = (error) => {
        console.log(error);
    };
    const handleScanFile = (result) => {
        if (result) {
            setScanResultFile(result);
        }
    };
    const onScanFile = () => {
        qrRef.current.openImageDialog();
    };
    const handleErrorWebCam = (error) => {
        console.log(error);
    };
    const handleScanWebCam = (result) => {
        if (result) {
            setScanResultWebCam(result);
            setReloadHistory(!!result);
        }
    };

    function showProdcutToUser() {
        console.log("Show function");
        if (whatShow == "details") {
            return <ProductDetail product_id={scanResultWebCam} />;
        } else {
            return <ProductHistory product_id={scanResultWebCam} />;
        }
    }
    return (
        <div className="container-fluid _p_history_card">
            <TopNavigation />
            <div className="row">
                <div className="col-4 _qr">
                    <QrReader
                        className="_qr_scanner"
                        delay={300}
                        style={{ width: "70%" }}
                        onError={handleErrorWebCam}
                        onScan={handleScanWebCam}
                    />
                    <text className="_or">OR </text>
                    <div>
                        <input
                            placeholder="Enter Product key"
                            value={inputID}
                            className="_user_ip_pid"
                            onChange={(e) => setInputID(e.target.value)}
                        />
                        <button
                            className="_user_button"
                            onClick={(e) => {
                                setScanResultWebCam(inputID);
                                console.log("Pressing  button : ", inputID);
                            }}
                        >
                            Submit
                        </button>
                        <button onClick={(e) => setWhatShow("history")}>
                            Search History
                        </button>
                        <button onClick={(e) => setWhatShow("details")}>
                            Product Details
                        </button>
                    </div>
                </div>
                <div
                    className="col-7  __scann_history"
                    style={{ border: "3px solid green" }}
                >
                    {/* <div className="_scann_message">
                        Scan code to see Details
                    </div> */}
                    {setScanResultWebCam && showProdcutToUser()}
                </div>
            </div>
        </div>
    );
}

export default Scanned;

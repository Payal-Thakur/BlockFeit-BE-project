import React, { useState, useRef, Component } from "react";
import {
  Container,
  Card,
  CardContent,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import QRCode from "qrcode";
import "../../style/Scanned.css";
import QrReader from "react-qr-reader";

import ProductHistory from "../product/ProductHistory";

function Scanned() {
  const [text, setText] = useState("");
  const [reloadHistory, setReloadHistory] = useState(false);
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
  return (
    <div className="container-flex _p_history_card">
      <div className="row">
        <div className="col-3 _qr">
          <QrReader
            className="_qr_scanner"
            delay={300}
            style={{ width: "70%" }}
            onError={handleErrorWebCam}
            onScan={handleScanWebCam}
          />
          <text>OR </text>
          <div>
            <input
              placeholder="Enter Product key"
              value={inputID}
              onChange={(e) => setInputID(e.target.value)}
            />
            <button
              onClick={(e) => {
                setScanResultWebCam(inputID);
                setReloadHistory(!reloadHistory);
                console.log("Pressing  button : ", inputID);
              }}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="col-8" style={{ border: "3px solid green" }}>
          {!reloadHistory ? (
            <div>Scan code</div>
          ) : (
            <>
              <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
              <ProductHistory product_id={scanResultWebCam} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Scanned;

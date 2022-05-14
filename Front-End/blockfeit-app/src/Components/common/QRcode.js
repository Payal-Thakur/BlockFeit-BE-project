import React, { useState, useRef, useEffect } from "react";
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
import "../../style/QRcode.css";

function QRcode(prop) {
    console.log("Product_id in QR Code : ", prop.product_id);
    const [text, setText] = useState(prop.product_id);
    const [imageUrl, setImageUrl] = useState("");

    const generateQrCode = async () => {
        try {
            const response = await QRCode.toDataURL(text);
            console.log("Generating QR For P_ID : ", prop.product_id);

            setImageUrl(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log("in USe Effect ");
        generateQrCode();
    }, []);

    return (
        <div className="_qr_code_con">
            <div>
                {imageUrl ? (
                    <a href={imageUrl} download>
                        <img src={imageUrl} alt="img" />
                    </a>
                ) : null}
            </div>
        </div>
    );
}

export default QRcode;

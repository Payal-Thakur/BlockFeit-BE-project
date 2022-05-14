import React, { useState, useEffect } from "react";
import "../../style/VerifyOwnership.css";
import correct from "../../Images/validated-img.gif";
import wrong from "../../Images/rejection-img.gif";
import TopNavigation from "./TopNavigation";

function VerifyOwnership() {
    let [productId, setProductId] = useState("");
    let [ownerId, setOwnerId] = useState("");
    let [result, setResult] = useState(undefined);

    function verifyOwnership() {
        fetch(
            `http://localhost:7000/api/verifyOwnership?owner_id=${ownerId}&product_id=${productId}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setResult(data.result === true);
            });
    }

    function showResult() {
        if (result === undefined) {
            return <>Enter information to VerifyOwnership</>;
        } else if (result) {
            return (
                <>
                    <img src={correct} />
                    <h6>Product Matched With Product Owner</h6>
                </>
            );
        } else {
            return (
                <>
                    <img src={wrong} />
                    <h6>Product Didn't Matched With Product Owner</h6>
                </>
            );
        }
    }

    return (
        <>
            <TopNavigation />
            <div className="_container">
                <div className="_input_container form">
                    <input
                        required={true}
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                        className="_vo_input"
                        type="text"
                        placeholder="Product ID"
                    />
                    <input
                        required={true}
                        value={ownerId}
                        onChange={(e) => setOwnerId(e.target.value)}
                        className="_vo_input"
                        type="text"
                        placeholder="Owner ID"
                    />
                    <button onClick={verifyOwnership} className="_vo_button">
                        Verify Ownership
                    </button>
                </div>
                <div className="_vo_result">{showResult()}</div>
            </div>
        </>
    );
}

export default VerifyOwnership;

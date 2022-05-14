import React, { useEffect, useState } from "react";
import "../../style/ProductHistory.css";

function ProductHistory(prop) {
    const id = prop.product_id;
    const [history, setHistory] = useState([]);

    function fetchProductHistory() {
        console.log("Making Request for ID : ", id);

        fetch(`http://localhost:7000/api/product-history?product_id=${id}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => setHistory(data.history))
            .catch((err) => {
                setHistory(undefined);
                console.log(
                    `Something went wrong while getting product History \n Error : ${JSON.stringify(
                        err
                    )}`
                );
            });
    }

    useEffect(() => {
        fetchProductHistory();
    }, []);

    return (
        <div>
            {history.map((hist) => {
                return (
                    <div className="_p_history_card">
                        <h6>Transaction ID : {hist.product_history_id}</h6>
                        <text>Current Owner: {hist.buyer_public_key}</text>
                        <text>Previous Owner : {hist.owner_public_key}</text>
                        <text>Hash: {hist.transaction_address}</text>
                        <text>{hist.time_stamp}</text>
                    </div>
                );
            })}
        </div>
    );
}

export default ProductHistory;

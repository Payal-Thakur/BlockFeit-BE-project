import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../style/ProductDetail.css";
import TopNavigation from "../common/TopNavigation";
import QRcode from "../common/QRcode";

function ProductDetail(prop) {
    let [product, setProduct] = useState(undefined);
    function getProductById(product_id) {
        fetch(
            `http://localhost:7000/api/productById?product_id=${product_id}`,
            {
                method: "GET",
            }
        )
            .then((response) => response.json())
            .then((data) => setProduct(data.product))
            .catch((error) => {
                console.log(JSON.stringify(error));
            });
    }

    useEffect(() => {
        getProductById(prop.product_id);
    }, []);

    console.log("Product_id in Product Details : ", prop.product_id);
    return (
        <div className="container-fluid">
            <div className="row _p_content">
                <div className="col-4 _p_barcode">
                    <QRcode product_id={prop.product_id} />
                </div>
                {product !== undefined ? (
                    <div className="col-8 _p_detail">
                        <span>ID: {product.product_id}</span>
                        <span>Name: {product.product_name}</span>
                        <span>Current Owner ID : {product.owner_id}</span>
                        <span>Description: {product.product_description}</span>
                        <span>Height: {product.product_height}</span>
                        <span>Width: {product.product_width}</span>
                        <span>
                            Manufactured Date:{" "}
                            {product.product_manufactured_date}
                        </span>
                        <span>Size: {product.product_size}</span>
                        <span>Batch: {product.batch}</span>
                        <span>
                            Manufacturer: {product.product_manufacturer}
                        </span>
                    </div>
                ) : (
                    <div>Scan to get Product Details</div>
                )}
            </div>
        </div>
    );
}

export default ProductDetail;

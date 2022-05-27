import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../style/myProducts.css";
function MyProducts() {
    const [products, setProducts] = useState([]);
    const { owner } = useParams();
    let localToken = JSON.parse(localStorage.getItem("blockFeitToken"));
    async function getProducts() {
        await fetch(
            `http://localhost:7000/api/owner-products?owner_id=${owner}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localToken}`,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data.products);
                setProducts(data.products);
            })
            .catch((err) => {
                console.log("Something went wrong while getting products");
                console.log("error : ", JSON.stringify(err));
            });
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            {/* {JSON.stringify(products)} */}
            {/* Ur products goes here, owner : ${owner} products:{" "} */}
            {products.map((product) => {
                return (
                    <div className="_all_product">
                        <div className="_ap_fields">
                            ID:{" "}
                            <span className="_ap_values">
                                {" "}
                                {product.product_id}
                            </span>
                        </div>
                        <div className="_ap_fields">
                            Name:{" "}
                            <span className="_ap_values">
                                {product.product_name}
                            </span>
                        </div>
                        <div className="_ap_fields">
                            Descrption :{" "}
                            <span className="_ap_values">
                                {product.product_description}
                            </span>
                        </div>
                        <div className="_ap_fields">
                            Width :{" "}
                            <span className="_ap_values">
                                {product.product_width}
                            </span>
                            Height :{" "}
                            <span className="_ap_values">
                                {product.product_height}
                            </span>
                        </div>
                        <div className="_ap_fields">
                            Date :{" "}
                            <span className="_ap_values">
                                {product.product_manufactured_date}
                            </span>
                        </div>

                        <div className="_ap_fields">
                            Size :{" "}
                            <span className="_ap_values">
                                {product.product_size}
                            </span>
                            Batch :{" "}
                            <span className="_ap_values">
                                {product.product_batch}
                            </span>
                        </div>
                        <div className="_ap_fields">
                            Owner :{" "}
                            <span className="_ap_values">
                                {product.owner_id}
                            </span>
                        </div>
                        <div className="_ap_fields">
                            Manufacturer :{" "}
                            <span className="_ap_values">
                                {product.product_manufacturer}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default MyProducts;

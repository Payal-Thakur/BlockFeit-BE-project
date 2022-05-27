import { json } from "body-parser";
import React, { useEffect, useState } from "react";
import "../../style/AllVendors.css";

function AllVendor() {
    let [vendors, setVendors] = useState([]);

    function fetchVendor() {
        fetch(`http://localhost:7000/api/productrequestedvenodr`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setVendors(data.result);
            });
    }

    useEffect(() => {
        fetchVendor();
    }, []);

    return (
        <div className="_v_list">
            <table>
                <thead>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Public Key</td>
                    <td>Requested</td>
                    <td>Unsold</td>
                    <td>Sold</td>
                </thead>
                <tbody className="_vl_t_body">
                    {vendors.map((vendor) => {
                        return (
                            <tr>
                                <td>{vendor.vendor_id}</td>
                                <td>{vendor.vendor_name}</td>
                                <td>{vendor.vendor_public_key}</td>
                                <td>{vendor.vendor_quantity_requested}</td>
                                <td>{vendor.vendor_quantity_available}</td>
                                <td>{vendor.vendor_quantity_sold}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AllVendor;

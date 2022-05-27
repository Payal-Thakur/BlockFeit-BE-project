import React, { useState } from "react";
import "../../style/MAddProducts.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function MAddProducts() {
    let localUser = JSON.parse(localStorage.getItem("blockFeit"));
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const [manuDate, setManuDate] = useState("");
    const [size, setSize] = useState("");
    const [batch, setBatch] = useState("");
    const [ownerId, setOwnerId] = useState(localUser.manufacturer_public_key);
    const [productManu, setproductManu] = useState(localUser.manufacturer_id);
    const [response, setResponse] = useState("");

    let localToken = JSON.parse(localStorage.getItem("blockFeitToken"));

    function addProduct(event) {
        event.preventDefault();
        fetch("http://localhost:7000/api/addproduct", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${localToken}`,
            },
            body: JSON.stringify({
                product_name: name,
                product_description: description,
                product_height: height,
                product_width: width,
                product_manufactured_date: manuDate,
                product_size: size,
                product_batch: batch,
                product_owner_id: ownerId,
                product_manufacturer: productManu,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Add product  " + JSON.stringify(data));
                if (data.err !== undefined) {
                    toast.warning(
                        data.message + " " + JSON.stringify(data.err)
                    );
                    return;
                }

                setResponse(JSON.stringify(data));
                toast.success("Product Added Successfully!");
            })
            .catch((err) => {
                toast.error("Server Error");
                console.log(
                    "Something went wrong while Adding product \n Error : " +
                        JSON.stringify(err)
                );
            });
    }

    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-xs-4">
                        <form class="form-horizontal" align="center">
                            <div class="form-group row">
                                <label class="col-sm-2 control-label" for="id2">
                                    Product Name
                                </label>
                                <div class="col-sm-10">
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Enter Product Name"
                                        value={name}
                                        required={true}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-2 control-label" for="id1">
                                    Product Description
                                </label>
                                <div class="col-sm-10">
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="product description"
                                        value={description}
                                        required={true}
                                        onChange={(e) => {
                                            setDescription(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-2 control-label" for="id2">
                                    Width
                                </label>
                                <div class="col-sm-10">
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Enter Width"
                                        value={width}
                                        required={true}
                                        onChange={(e) => {
                                            setWidth(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-2 control-label" for="id2">
                                    Height
                                </label>
                                <div class="col-sm-10">
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Enter Height"
                                        value={height}
                                        required={true}
                                        onChange={(e) => {
                                            setHeight(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 control-label" for="id2">
                                    Batch
                                </label>
                                <div class="col-sm-10">
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Enter Batch"
                                        value={batch}
                                        required={true}
                                        onChange={(e) => {
                                            setBatch(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 control-label" for="id2">
                                    Size
                                </label>
                                <div class="col-sm-10">
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Enter Size"
                                        value={size}
                                        required={true}
                                        onChange={(e) => {
                                            setSize(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 control-label" for="id2">
                                    Date
                                </label>
                                <div class="col-sm-10">
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Enter Date, e.g. 12/2/2022"
                                        value={manuDate}
                                        required={true}
                                        onChange={(e) => {
                                            setManuDate(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-2 control-label" for="id2">
                                    Owner Id
                                </label>
                                <div class="col-sm-10">
                                    <input
                                        class="form-control"
                                        type="text"
                                        id="id2"
                                        placeholder="Owner Id"
                                        value={ownerId}
                                        required={true}
                                        onChange={(e) => {
                                            setOwnerId(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-2 control-label" for="id2">
                                    Manufacturer Name
                                </label>
                                <div class="col-sm-10">
                                    <input
                                        class="form-control"
                                        type="text"
                                        id="id2"
                                        placeholder="Enter Manufacturer Name"
                                        value={productManu}
                                        required={true}
                                        onChange={(e) => {
                                            setproductManu(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div class="container">
                                <button
                                    type="button"
                                    class="btn btn-success"
                                    onClick={addProduct}
                                >
                                    Add Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MAddProducts;

import React, { useState } from "react";
import "../../style/Vsell.css";

function Vsell() {
    let localUser = JSON.parse(localStorage.getItem("blockFeit"));
    let [publicKey, setPublicKey] = useState(localUser.vendor_public_key);
    let [privateKey, setPrivateKey] = useState(localUser.vendor_private_key);
    let [customerPublicKey, setCustomerPublicKey] = useState("");
    let [productID, setProductID] = useState("");

    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <form class="form-horizontal" align="center">
                            <div class="form-group row">
                                <label class="col-sm-2 control-label" for="id1">
                                    Product Id
                                </label>
                                <div class="col-sm-10">
                                    <input
                                        class="form-control"
                                        type="text"
                                        value={productID}
                                        onChange={(e) =>
                                            setProductID(e.target.value)
                                        }
                                        placeholder="Enter Product Id "
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 control-label" for="id2">
                                    Retailer Public Key
                                </label>
                                <div class="col-sm-10">
                                    <input
                                        value={publicKey}
                                        onChange={(e) =>
                                            setPublicKey(e.target.value)
                                        }
                                        class="form-control"
                                        type="text"
                                        id="id2"
                                        placeholder="Enter Retailer Public Key "
                                        required
                                    />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 control-label" for="id2">
                                    Retailer Private Key
                                </label>
                                <div class="col-sm-10">
                                    <input
                                        value={privateKey}
                                        onChange={(e) =>
                                            setPrivateKey(e.target.value)
                                        }
                                        class="form-control"
                                        type="text"
                                        placeholder="Enter Retailer Private Key"
                                        required
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-2 control-label" for="id2">
                                    Customer Public Key
                                </label>
                                <div class="col-sm-10">
                                    <input
                                        value={customerPublicKey}
                                        onChange={(e) =>
                                            setCustomerPublicKey(e.target.value)
                                        }
                                        class="form-control"
                                        type="text"
                                        placeholder="Enter Customer Public Key"
                                        required
                                    />
                                </div>
                            </div>

                            <div class="container">
                                <button type="button" class="btn btn-success">
                                    Sell Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Vsell;

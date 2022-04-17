import React, { useState, useEffect, useDebugValue } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MSellProducts() {
  let localToken = JSON.parse(localStorage.getItem("blockFeitToken"));
  let [currentOwnerPublicKey, setCurrentOwnerPublicKey] = useState("");
  let [currentOwnerPrivateKey, setCurrentOwnerPrivateKey] = useState("");
  let [quantity, setQuantity] = useState("");
  let [newOwnerPublicKey, setNewOwnerPublicKey] = useState("");

  function sellProduct() {
    fetch("http://localhost:7000/api/sell-product", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localToken}`,
      },
      body: JSON.stringify({
        owner_id: currentOwnerPublicKey,
        owner_id_private_key: currentOwnerPrivateKey,
        quantity: quantity,
        customer_id: newOwnerPublicKey,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("sell product  " + JSON.stringify(data));
        if (data.err !== undefined) {
          toast.warning(JSON.stringify(data.err));
          return;
        }

        toast.success(
          `${quantity} Products sold Successfully! to ${newOwnerPublicKey}`
        );
        setQuantity("");
        setCurrentOwnerPrivateKey("");
        setCurrentOwnerPublicKey("");
        setNewOwnerPublicKey("");
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
        <div class="row" style={{ marginTop: "130px" }}>
          <div class="col-xs-2">
            <form class="form-horizontal" align="center">
              <div class="form-group row">
                <label class="col-sm-2 control-label" for="id2">
                  Quantity
                </label>
                <div class="col-sm-10">
                  <input
                    value={quantity}
                    class="form-control"
                    id="id2"
                    placeholder="Enter Quantity"
                    required={true}
                    type="text"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 control-label" for="id2">
                  Manufacturer Private Key
                </label>
                <div class="col-sm-10">
                  <input
                    value={currentOwnerPrivateKey}
                    class="form-control"
                    id="id2"
                    placeholder="Enter Manufacturer Private Key"
                    required={true}
                    type="text"
                    onChange={(e) => setCurrentOwnerPrivateKey(e.target.value)}
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 control-label" for="id2">
                  Manufacturer Public Key
                </label>
                <div class="col-sm-10">
                  <input
                    value={currentOwnerPublicKey}
                    class="form-control"
                    id="id2"
                    placeholder="Enter Manufacturer Public Key"
                    required={true}
                    type="text"
                    onChange={(e) => setCurrentOwnerPublicKey(e.target.value)}
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 control-label" for="id2">
                  Seller Public Key
                </label>
                <div class="col-sm-10">
                  <input
                    value={newOwnerPublicKey}
                    class="form-control"
                    id="id2"
                    placeholder="Enter Seller Public Key"
                    required={true}
                    type="text"
                    onChange={(e) => setNewOwnerPublicKey(e.target.value)}
                  />
                </div>
              </div>
              <div class="container">
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={sellProduct}
                >
                  Sell Products
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MSellProducts;

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../../style/MAddSeller.css";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function MAddSeller() {
  const [sellerList, setSellerList] = useState([]);
  let localToken = JSON.parse(localStorage.getItem("blockFeitToken"));

  function getRequestedSellerList() {
    fetch("http://localhost:7000/api/requestedvendor", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.vendors.length !== 0) {
          setSellerList(data.vendors);
        } else {
          toast.info("No Seller Request is pending");
          setSellerList([]);
        }
      })
      .catch((err) =>
        console.log(
          "Server Error while getting vendorList" + JSON.stringify(err)
        )
      );
  }

  useEffect(() => {
    getRequestedSellerList();
  }, []);

  function approveVendorList(id) {
    fetch("http://localhost:7000/api/approveRequest", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localToken}`,
      },
      body: JSON.stringify({
        vendor_id: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error !== undefined) {
          toast.warning(data.error);
          return;
        }

        toast.success("Vendor Added Successfully Successfully!");
        getRequestedSellerList();
      })
      .catch((err) => {
        toast.error("SErver error");
        console.log(
          "Something went wrong while adding vendor \n Error : " +
            JSON.stringify(err)
        );
      });
  }

  return (
    <div className="container">
      {sellerList.length == 0 ? (
        <h6 id="no_seller">No Seller is pending</h6>
      ) : (
        sellerList.map((vendor) => {
          return (
            <div className="row">
              <div className="_seller_container">
                <div>
                  <span>Name: {vendor.vendor_name}</span>
                  <span>Email ID: {vendor.vendor_email}</span>
                </div>

                <div>
                  <span>Vendor ID: {vendor.vendor_id}</span>
                  <span>Public Key: {vendor.vendor_public_key}</span>
                </div>

                <div>
                  <span>Shop Name: {vendor.vendor_shop_name}</span>
                  <span>Mobile No. : {vendor.vendor_mobile_no}</span>
                </div>

                <div>
                  <span>City : {vendor.vendor_city}</span>
                  <span>State: {vendor.vendor_state}</span>
                </div>
                <button onClick={() => approveVendorList(vendor.vendor_id)}>
                  Add me
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default MAddSeller;

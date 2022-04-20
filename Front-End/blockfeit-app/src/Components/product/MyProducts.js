import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MyProducts() {
  const [products, setProducts] = useState([]);
  const { owner } = useParams();
  let localToken = JSON.parse(localStorage.getItem("blockFeitToken"));
  async function getProducts() {
    await fetch(`http://localhost:7000/api/owner-products?owner_id=${owner}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
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
      Ur products goes here, owner : ${owner} products:{" "}
      {JSON.stringify(products)}
    </div>
  );
}

export default MyProducts;

import React from "react";
import Mnavbar from "./Components/Includes/Mnavbar";
import Msidebar from "./Components/Includes/Msidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// common files
import Home from "./Components/common/Home";
import About from "./Components/common/About";
import Contact from "./Components/common/Contact";
import Authenticated from "./Components/common/Authenticated";
import Login from "./Components/common/Login";
import QRcode from "./Components/common/QRcode";
import Scanned from "./Components/common/Scanned";
import Signup from "./Components/common/Signup";

// products
import MyProducts from "./Components/product/MyProducts";
import ProductDetail from "./Components/product/ProductDetail";
// customer
import Cprofile from "./Components/customer/Cprofile";

//vendor
import Vendor from "./Components/vendor/Vendor";

//Manufacturers
import Manufacturer from "./Components/manufacturer/Manufacturer";

// other
import Counter from "./Components/Counter";
import VerifyOwnership from "./Components/common/VerifyOwnership";

function App() {
    return (
        <BrowserRouter>
            <div>
                {/* <Navbar/> */}
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/About" exact element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Signup" element={<Signup />} />

                    <Route
                        path="/profile/manufacturer"
                        element={<Manufacturer />}
                    />

                    <Route path="/QRcode" element={<QRcode />} />

                    <Route path="/profile/customer" element={<Cprofile />} />
                    <Route
                        path="/prodouct/product-history"
                        element={<Scanned />}
                    />

                    <Route path="/profile/vendor" element={<Vendor />} />
                    <Route
                        path="/product/verify-ownership"
                        element={<VerifyOwnership />}
                    />

                    <Route
                        path="/product/myproducts/:owner"
                        element={<MyProducts />}
                    />
                    <Route
                        path="/product/product-detail/:product_id"
                        element={<ProductDetail />}
                    />

                    <Route path="/Counter" element={<Counter />} />
                    <Route path="/Authenticated" element={<Authenticated />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

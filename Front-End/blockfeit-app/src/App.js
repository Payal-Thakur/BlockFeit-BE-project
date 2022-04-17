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
import MyProducts from "./Components/common/MyProducts";

// customer
import Cprofile from "./Components/customer/Cprofile";

//vendor
import Vendor from "./Components/vendor/Vendor";

//Manufacturers

import MAddProducts from "./Components/manufacturer/MAddProducts";
import MAddSeller from "./Components/manufacturer/MAddSeller";
import Mhome from "./Components/manufacturer/Mhome";
import MSellProducts from "./Components/manufacturer/MSellProducts";
import Manufacturer from "./Components/manufacturer/Manufacturer";

// other
import Counter from "./Components/Counter";

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

          <Route path="/manufacturer" element={<Manufacturer />} />
          <Route path="/Mhome" element={<Mhome />} />
          <Route path="/MAddSeller" exact element={<MAddSeller />} />
          <Route path="/MAddProducts" element={<MAddProducts />} />
          <Route path="/MSellProducts" element={<MSellProducts />} />
          <Route path="/Mnavbar" element={<Mnavbar />} />
          <Route path="/Msidebar" element={<Msidebar />} />
          <Route path="/QRcode" element={<QRcode />} />

          <Route path="/Cprofile" element={<Cprofile />} />
          <Route path="/Scanned" element={<Scanned />} />

          <Route path="/vendor" element={<Vendor />} />

          <Route path="/product/myproducts/:owner" element={<MyProducts />} />

          <Route path="/Counter" element={<Counter />} />
          <Route path="/Authenticated" element={<Authenticated />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

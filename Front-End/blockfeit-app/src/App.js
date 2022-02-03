import React from 'react';
import Navbar from './Components/Includes/Navbar'; 
import Mnavbar from './Components/Includes/Mnavbar'; 
import Msidebar from './Components/Includes/Msidebar'; 
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';

import MAddSeller from './Components/Pages/MAddSeller';
import MAddProducts from './Components/Pages/MAddProducts';
import MSellProducts from './Components/Pages/MSellProducts';
import Mhome from './Components/Pages/Mhome';

import Chome from './Components/Pages/Chome';
import Cprofile from './Components/Pages/Cprofile';
import Chelp from './Components/Pages/Chelp';




function App() {
  return (
            <BrowserRouter>
              <div> 
                <Navbar/>
                  <Routes>
                  <Route path="/" exact element={<Home />} /> 
                  <Route path="/About" exact element={<About />} />
                  <Route path="/Contact" element={<Contact/>} />
                  <Route path="/Login" element={<Login/>} />
                  <Route path="/Signup" element={<Signup/>} />

                  <Route path="/Mhome" element={<Mhome/>} />
                  <Route path="/MAddSeller" exact element={<MAddSeller/>} />
                  <Route path="/MAddProducts" element={<MAddProducts/>} />
                  <Route path="/MSellProducts" element={<MSellProducts/>} />
                  <Route path="/Mnavbar" element={<Mnavbar/>} />
                  <Route path="/Msidebar" element={<Msidebar/>} />
                   <Route path="/Chome" element={<Chome/>} />
                   <Route path="/Cprofile" element={<Cprofile/>} />
                   <Route path="/Chelp" element={<Chelp/>} />
                  



                  </Routes>
    
               </div>
             </BrowserRouter>
          );
}

export default App;

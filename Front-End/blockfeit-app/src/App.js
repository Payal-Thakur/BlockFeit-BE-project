import React from 'react';
import Navbar from './Components/Includes/Navbar'; 
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';

function App() {
  return (
            <BrowserRouter>
              <div> 
                <Navbar />
                  <Routes>
                  <Route path="/" exact element={<Home />} /> 
                  <Route path="/About" element={<About />} />
                  <Route path="/Contact" element={<Contact/>} />
                  <Route path="/Login" element={<Login/>} />
                  <Route path="/Signup" element={<Signup/>} />


                  </Routes>
    
               </div>
             </BrowserRouter>
          );
}

export default App;

import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Route,Routes, } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Service from './Components/Service';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Url from './Components/Url';




const App = () => {

    return(
        <>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Service" element={<Service/>} />
        <Route exact path = "/Projects" element={<Projects/>}/>
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/url" element = {<Url/>}/>
        </Routes>
        <Footer />

      
     </>
    );
};
export default App;

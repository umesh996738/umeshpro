import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    return (
             <>
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">

                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <div className="container-fluid">
                                 <NavLink className="navbar-brand" to ="/">Engineer...</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                 <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <NavLink activeClassName ="selected" className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                 <li className="nav-item">
                            <NavLink activeClassName ="selected" className="nav-link" to="/Projects">Projects</NavLink>
                                </li>
                                
                                 <li className="nav-item">
                            <NavLink activeClassName ="selected" className="nav-link" to="/service">Certificates</NavLink>
                            
                                </li>
                               
                                <li className="nav-item">
                            <NavLink activeClassName ="selected" className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                            <NavLink activeClassName ="selected" className="nav-link" to="/Contact">Contact</NavLink>
                                </li>
                                 <li className="nav-item">
                            <NavLink activeClassName ="selected" className="nav-link" to="/Url">CV</NavLink>
                                </li>
                               
                                

                                </ul>
                                
                                    
        
                                 
     
                                </div>
                                 </div>
                                </nav>
                        </div>
                    </div>
                </div>


            </>
                
        
        
  
            
        
    );
};

export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';



const Common = (props) => {

    return(
        <>
         <section id = "header">
         <div className='container-fluid nav_bg'>
            <div>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className = "col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                            <h1>
                                {props.name}
                                <strong className='brand-name'> Umesh Pal </strong>
                                
                            </h1>
                            <h2>
                                 i'm a Software Engineer Makes Society Better.
                            </h2>
                            <p> 
                                Results-driven designing, developing,and maintaining applications.Adept at collaborating in team 
                                environments to deliver high-quality software solutions.
                            </p>
                            <div className="mt-3">
                                <NavLink to = {props.visit} className='btn-get-started'>
                                    {props.btnname}
                                 </NavLink>
                                  
                            </div>  
                                  
                        </div>
                        
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src= {props.imgsrc} className="img-fluid animated" alt=" home img"/>
                        </div>
                       </div>     
                    </div>
                </div>
            </div>
         </div>
         </section>
        </>
    );
};
export default Common;

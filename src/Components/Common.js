import React from 'react';
import { NavLink } from 'react-router-dom';
import AnimatedImage from './AnimatedImage';
import ScrollReveal from './ScrollReveal';

const Common = (props) => {
    return (
        <>
            <section id="header">
                <div className='container-fluid'>
                    <div className="container">
                        <div className="row align-items-center min-vh-100">
                            <div className="col-lg-6 hero-content">
                                <ScrollReveal delay={200}>
                                    <h1 className="slide-in-left">
                                        {props.name}
                                        <span className='brand-name'> Umesh Pal </span>
                                    </h1>
                                </ScrollReveal>
                                
                                <ScrollReveal delay={400}>
                                    <h2 className="slide-in-left">
                                        I'm a Software Engineer Making Society Better.
                                    </h2>
                                </ScrollReveal>
                                
                                <ScrollReveal delay={600}>
                                    <p className="slide-in-left">
                                        Results-driven professional specializing in designing, developing, and maintaining 
                                        cutting-edge applications. Expert at collaborating in dynamic team environments 
                                        to deliver high-quality, scalable software solutions that drive business success.
                                    </p>
                                </ScrollReveal>
                                
                                <ScrollReveal delay={800}>
                                    <div className="mt-4">
                                        <NavLink to={props.visit} className='btn-get-started'>
                                            <span>{props.btnname}</span>
                                        </NavLink>
                                    </div>
                                </ScrollReveal>
                            </div>
                            
                            <div className="col-lg-6 header-img">
                                <ScrollReveal delay={1000}>
                                    <AnimatedImage 
                                        src={props.imgsrc} 
                                        alt="Professional Profile"
                                        animationType="float"
                                        className="professional-image"
                                    />
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common;
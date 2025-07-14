import React from 'react';
import web from '../images/img2.png';
import Common from './Common';
import ScrollReveal from './ScrollReveal';

const About = () => {
    return (
        <>
            <Common  
                name='About Me -' 
                imgsrc={web}
                visit='/contact'
                btnname='Contact Now'
            />
            
            {/* Additional About Content */}
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <ScrollReveal>
                                <h2 className="mb-4">My Journey</h2>
                                <p className="lead mb-4">
                                    With a passion for creating innovative solutions, I've dedicated my career 
                                    to mastering the art of software development and engineering excellence.
                                </p>
                                <p>
                                    My expertise spans across multiple technologies and frameworks, allowing me 
                                    to build robust, scalable applications that solve real-world problems. 
                                    I believe in continuous learning and staying updated with the latest 
                                    industry trends and best practices.
                                </p>
                            </ScrollReveal>
                        </div>
                        <div className="col-lg-6">
                            <ScrollReveal delay={300}>
                                <div className="row">
                                    <div className="col-6 mb-4">
                                        <div className="text-center">
                                            <h3 className="gradient-text">50+</h3>
                                            <p>Projects Completed</p>
                                        </div>
                                    </div>
                                    <div className="col-6 mb-4">
                                        <div className="text-center">
                                            <h3 className="gradient-text">3+</h3>
                                            <p>Years Experience</p>
                                        </div>
                                    </div>
                                    <div className="col-6 mb-4">
                                        <div className="text-center">
                                            <h3 className="gradient-text">15+</h3>
                                            <p>Technologies</p>
                                        </div>
                                    </div>
                                    <div className="col-6 mb-4">
                                        <div className="text-center">
                                            <h3 className="gradient-text">100%</h3>
                                            <p>Client Satisfaction</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
import React from 'react';
import ScrollReveal from './ScrollReveal';

const Footer = () => {
    const year = new Date().getFullYear();
    
    return (
        <>
            <footer className="text-white">
                <div className="container">
                    <ScrollReveal>
                        <div className="row py-4">
                            <div className="col-lg-6">
                                <h5 className="mb-3">Umesh Pal</h5>
                                <p className="mb-3">
                                    Software Engineer passionate about creating innovative solutions 
                                    and building applications that make a positive impact on society.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <h6 className="mb-3">Get In Touch</h6>
                                <p className="mb-1">
                                    📧 umeshpal5243@gmail.com
                                </p>
                                <p className="mb-1">
                                    📍 Mumbai, Maharashtra
                                </p>
                                <p className="mb-3">
                                    💼 <a href="https://www.linkedin.com/in/umesh-d-pal-1914b4262" 
                                         className="text-white text-decoration-none">
                                        LinkedIn Profile
                                    </a>
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                    
                    <hr className="my-4" style={{ opacity: 0.3 }} />
                    
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="mb-0">
                                © {year} Umesh Pal. All Rights Reserved | 
                                <span className="mx-2">Terms and Conditions</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
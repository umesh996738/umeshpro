import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
    const [data, setData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => ({
            ...preVal,
            [name]: value,
        }));
    };

    const formSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
            setData({
                fullName: '',
                phone: '',
                email: '',
                message: '',
            });
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <>
            <div className="py-5" style={{ marginTop: '80px' }}>
                <div className="container">
                    <ScrollReveal>
                        <h1 className="section-title">Get In Touch</h1>
                        <p className="text-center text-muted mb-5 lead">
                            Let's discuss your next project or collaboration opportunity
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <div className="contact_div">
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <form onSubmit={formSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="fullName">Full Name *</label>
                                                    <input 
                                                        type="text" 
                                                        name="fullName" 
                                                        value={data.fullName} 
                                                        onChange={inputEvent} 
                                                        className="form-control" 
                                                        id="fullName" 
                                                        placeholder="Enter your full name"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="phone">Phone Number</label>
                                                    <input 
                                                        type="tel" 
                                                        name="phone" 
                                                        value={data.phone} 
                                                        onChange={inputEvent} 
                                                        className="form-control" 
                                                        id="phone" 
                                                        placeholder="Enter your phone number"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address *</label>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                value={data.email} 
                                                onChange={inputEvent} 
                                                className="form-control" 
                                                id="email" 
                                                placeholder="Enter your email address"
                                                required
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="message">Message *</label>
                                            <textarea 
                                                className="form-control" 
                                                name="message" 
                                                value={data.message} 
                                                onChange={inputEvent} 
                                                id="message" 
                                                rows="5"
                                                placeholder="Tell me about your project or inquiry..."
                                                required
                                            ></textarea>
                                        </div>
                                        
                                        <div className="text-center">
                                            <button 
                                                type="submit" 
                                                className="btn btn-primary btn-lg"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <span className="loading-spinner me-2"></span>
                                                        Sending...
                                                    </>
                                                ) : (
                                                    'Send Message'
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </>
    );
};

export default Contact;
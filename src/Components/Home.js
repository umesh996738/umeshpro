import React from 'react';
import web from '../images/umesh.png';
import Common from './Common';
import ScrollReveal from './ScrollReveal';

const Home = () => {
    return (
        <>
            <Common  
                name='Hi, I am' 
                imgsrc={web}
                visit='/contact'
                btnname='Get In Touch'
            />
            
            {/* Skills Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <ScrollReveal>
                        <h2 className="section-title">Technical Expertise</h2>
                    </ScrollReveal>
                    
                    <div className="skills-grid">
                        <ScrollReveal delay={200}>
                            <div className="skill-item stagger-animation">
                                <div className="skill-icon">💻</div>
                                <h4>Full Stack Development</h4>
                                <p>React, Node.js, Express, MongoDB</p>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal delay={400}>
                            <div className="skill-item stagger-animation">
                                <div className="skill-icon">☁️</div>
                                <h4>Cloud & DevOps</h4>
                                <p>AWS, Docker, Kubernetes, CI/CD</p>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal delay={600}>
                            <div className="skill-item stagger-animation">
                                <div className="skill-icon">🤖</div>
                                <h4>AI & Machine Learning</h4>
                                <p>Python, TensorFlow, Data Analysis</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
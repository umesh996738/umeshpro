import React from 'react';
import ScrollReveal from './ScrollReveal';

const Url = () => {
    const handleClick = () => {
        window.open('https://github.com/umesh996738/Umesh_Resume.github.io/blob/main/Umesh%20Resume.pdf', '_blank');
    };

    return (
        <section className="py-5" style={{ marginTop: '80px' }}>
            <div className="container">
                <ScrollReveal>
                    <div className="text-center">
                        <h1 className="section-title">Download My Resume</h1>
                        <p className="lead mb-5">
                            Get a comprehensive overview of my skills, experience, and achievements
                        </p>
                        
                        <div className="resume-preview mb-4">
                            <div className="glass-effect p-5 d-inline-block">
                                <div className="mb-4">
                                    <div className="skill-icon" style={{ fontSize: '4rem' }}>📄</div>
                                </div>
                                <h3 className="mb-3">Professional Resume</h3>
                                <p className="mb-4">
                                    Complete details about my technical skills, work experience, 
                                    education, and professional achievements.
                                </p>
                                <button 
                                    onClick={handleClick} 
                                    className="btn-get-started"
                                >
                                    <span>Download CV</span>
                                </button>
                            </div>
                        </div>
                        
                        <div className="row mt-5">
                            <div className="col-md-4 mb-3">
                                <div className="skill-item">
                                    <div className="skill-icon">🎯</div>
                                    <h5>Professional Experience</h5>
                                    <p>Detailed work history and achievements</p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="skill-item">
                                    <div className="skill-icon">🛠️</div>
                                    <h5>Technical Skills</h5>
                                    <p>Comprehensive technology stack overview</p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="skill-item">
                                    <div className="skill-icon">🏆</div>
                                    <h5>Certifications</h5>
                                    <p>Professional certifications and achievements</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Url;
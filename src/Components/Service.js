import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
import ScrollReveal from './ScrollReveal';

const Service = () => {
    return (
        <>
            <div className='py-5' style={{ marginTop: '80px' }}>
                <div className="container">
                    <ScrollReveal>
                        <h1 className='section-title'>Certificates & Achievements</h1>
                        <p className="text-center text-muted mb-5 lead">
                            Professional certifications and continuous learning journey
                        </p>
                    </ScrollReveal>
                </div>
            </div>
            
            <div className='container mb-5'>
                <div className='row'>
                    {Sdata.map((item, index) => (
                        <Card 
                            key={item.id} 
                            imgSrc={item.imgSrc} 
                            title={item.title}
                            description="Professional certification demonstrating expertise and commitment to continuous learning."
                        />
                    ))}
                </div>
            </div>
        </>    
    );
};

export default Service;
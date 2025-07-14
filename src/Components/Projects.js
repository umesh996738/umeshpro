import React from 'react';
import Card from './Card';
import Pdata from './Pdata';
import ScrollReveal from './ScrollReveal';

const Projects = () => {
    return (
        <>
            <div className='py-5' style={{ marginTop: '80px' }}>
                <div className="container">
                    <ScrollReveal>
                        <h1 className='section-title'>My Projects</h1>
                        <p className="text-center text-muted mb-5 lead">
                            Discover my latest work and innovative solutions
                        </p>
                    </ScrollReveal>
                </div>
            </div>
            
            <div className='container mb-5'>
                <div className='row'>
                    {Pdata.map((item, index) => (
                        <Card 
                            key={item.id} 
                            imgSrc={item.imgSrc} 
                            title={item.title || `Project ${index + 1}`}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </>    
    );
};

export default Projects;
import React from 'react';
import { NavLink } from 'react-router-dom';
import AnimatedImage from './AnimatedImage';
import ScrollReveal from './ScrollReveal';

const Card = (props) => {
    return (
        <>
            <div className='col-lg-4 col-md-6 col-12 mb-4'>
                <ScrollReveal className="h-100">
                    <div className='card h-100 hover-lift'>
                        <div className="image-hover-zoom">
                            <AnimatedImage 
                                src={props.imgSrc} 
                                alt={props.title || 'Project Image'}
                                className="card-img-top"
                                animationType="zoom"
                            />
                        </div>
                        <div className='card-body d-flex flex-column'>
                            <h5 className='card-title'>{props.title}</h5>
                            <p className='card-text flex-grow-1'>
                                {props.description || 'Explore this amazing project showcasing modern development practices and innovative solutions.'}
                            </p>
                            <div className="mt-auto">
                                <NavLink to='' className='btn btn-primary'>
                                    <span>Learn More</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </>
    );
};

export default Card;
import React from 'react';
import web from '../images/img2.png';
import Common from './Common';


const About = () => {

    return(
        <>
            <Common  name = 'Welcome to About Page' 
            imgsrc = {web}
            visit = '/contact'
            btnname = 'Contact Now'
            />                  
            
             
        </>
    );
};
export default About;

import React from 'react';
import web from '../images/img5.png';
import Common from './Common';


const Home = () => {

    return(
        <>
            <Common  name = 'Grow your business with ' 
            imgsrc = {web}
            visit = '/service'
            btnname = 'Get Started'
            />
        </>
    );
};
export default Home;

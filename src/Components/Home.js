import React from 'react';
import web from '../images/umesh.jpg';
import Common from './Common';


const Home = () => {

    return(
        <>
            <Common  name = 'Hi, Myself ' 
            imgsrc = {web}
            visit = '/service'
            btnname = 'Get Started'
            />
        </>
    );
};
export default Home;

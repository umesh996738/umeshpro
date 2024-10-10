import React from 'react';
import web from '../images/umesh.jpg';
import Common from './Common';
import Url from './Url';



const Home = () => {

    return(
        <>
            <Common  name = 'Hi, Myself ' 
            imgsrc = {web}
            visit = '/Url'
            btnname = 'CV'
              />
            <Url/>
            
            
        </>
        
    );
};
export default Home;

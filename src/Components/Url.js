import React from 'react';


const Url = () => {

     
    const handleClick = () => {
        window.open('https://github.com/umesh996738/Umesh_Resume.github.io/blob/main/Umesh%20Resume.pdf', '_blank');
    };

    return (
        <section id = "header">
             <button onClick={handleClick} className='btn-get-started' style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '7vh',
            width: '7hv',
            marginTop: '10px', 
            marginRight: '600px', 
            marginBottom: '947px', 
            marginLeft: '140px'}} >
            CV
        </button>
        </section>
       
    );
};

export default Url;

import React from 'react';


const Url = () => {
    const handleClick = () => {
        window.open('https://github.com/umesh996738/Umesh_Resume.github.io/blob/main/Resume.pdf', '_blank');
    };

    return (
        <button onClick={handleClick}>
            CV
        </button>
    );
};

export default Url;

import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="w-100 bg-light text-center">
                
                            
                 <p>© {year} Umesh Pal. All Rights Reserved | Term and conditions  </p>
                        
                    
                
            </footer>
        </>
    )
}
export default Footer;
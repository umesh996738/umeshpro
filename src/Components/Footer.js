import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="w-100 bg-light text-center">
                
                    <p> Sakinaka, Mumbai, Maharashtra • 9967385243 • umeshpal5243@gmail.com
                            www.linkedin.com/in/umesh-d-pal-1914b4262 
</p>        
                 <p>© {year} Umesh Pal. All Rights Reserved | Term and conditions  </p>
                        
                    
                
            </footer>
        </>
    )
}
export default Footer;
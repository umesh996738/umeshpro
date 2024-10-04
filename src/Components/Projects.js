import React from 'react';
import Card from './Card';
import Pdata from './Pdata';





const Projects = () => {

    return(
        <>
            <div className ='my-5'>
                <h1 className='text-center'> Projects</h1>
            </div>
            <div className ='container-fluid mb-5' >
                <div className ='row'>
                    <div className ='col-40 mx-auto'>
                        <div className ='row gy-4'>
                            
                            {
                                Pdata.map((item,index) =>{
                                    return <Card key ={item.id} imgSrc ={item.imgSrc} title ={item.title}/>
                                })
                            }

                            
                            
                        </div>
                    </div>
                </div>
            </div>




        </>    
    );
};
export default Projects;

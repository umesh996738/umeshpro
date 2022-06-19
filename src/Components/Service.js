import React from 'react';
import Card from './Card';
import Sdata from './Sdata';





const Sarvice = () => {

    return(
        <>
            <div className ='my-5'>
                <h1 className='text-center'> our service</h1>
            </div>
            <div className ='container-fluid mb-5' >
                <div className ='row'>
                    <div className ='col-10 mx-auto'>
                        <div className ='row gy-4'>
                            
                            {
                                Sdata.map((item,index) =>{
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
export default Sarvice;

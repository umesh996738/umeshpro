import React from 'react';
import { useState } from 'react';     // useState is a hook


const Contact = () => {
    const [data, setData] = useState({
        FullName: '',
        Phone: '',
        Email: '',
        Message: '',

    });
    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
         
        });
        
    }


    const fromSubmit = (e) => {
        e.preventDefault();
       // console.log(e.target.name.value);
        //console.log(e.target.email.value);
       // console.log(e.target.message.value);
        //console.log(e.target.phone.value);
        alert('Form Submitted');
    

    }
    return(
        <>
         <div className =" my-5">
                <h1 className="text-center">Contact Us</h1>
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit = {fromSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Name</label>
                                    <input type="text" name = "fullName" value = {data.fullName} onChange = {inputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
                                    <label htmlFor="exampleFormControlInput1">Phone</label>
                                    <input type="phone" name = "phone" value = {data.phone} onChange = {inputEvent }className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone Number"/>
                                    <label htmlFor="exampleFormControlInput1">Email</label>
                                    <input type="email"name = "email" value={data.email} onChange = {inputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email"/>
                                    <label htmlFor="exampleFormControlInput1">Message</label>
                                    <textarea className="form-control" type = "message" name = "message" value ={data.message} onChange = {inputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
         </div>
        </>
    );

};
export default Contact;

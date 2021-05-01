import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./Contact.css"
import emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_60d89wu', 'template_jt5lafk', e.target, 'user_K7MUQXC9nVS4AlIGcWqfI')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    return (
        <div className="row w-100 contact-parent">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-12 p-5">
                <h3>Get in Touch</h3>
                <div className="form-area pt-5">
                    <form onSubmit={sendEmail}>
                        <div class="form-group">
                            <label className="input-label" for="formGroupExampleInput">Name</label>
                            <input name="name" type="text" className="form-control input-field" id="formGroupExampleInput" placeholder="Enter Your Name" />
                        </div>
                        <div class="form-group">
                            <label className="input-label" for="exampleInputEmail1">Email address</label>
                            <input type="email" name="email" className="form-control input-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                        </div>
                        <div class="form-group">
                            <label className="input-label" for="exampleFormControlTextarea1">Message</label>
                            <textarea placeholder="Type Your Message" name="message" className="form-control input-field" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                        <button type="submit" class="submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
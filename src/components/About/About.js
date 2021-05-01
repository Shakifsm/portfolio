import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AboutImg from "../../images/about.png";
import "./About.css"
import ModalAbout from './ModalAbout';


const About = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="about-parent row w-100">
            <div className="col-md-2 ">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-12 p-3">
                <div className="about-img p-5">
                    <img src={AboutImg} alt="" className="img-fluid" />
                </div>
                <div className="about-content row w-100 pl-5">
                    <div className="col-md-6">
                        <h3>Tanvir Mahtab Shakif</h3>
                        <p style={{ color: '#B0B0B0' }}>Hello, I am a creative Web Developer based in Dhaka and happy to develop full functional website with modern features. I will love to develop your website.</p>
                        <button onClick={openModal} className="about-btn">Learn More</button>
                        <ModalAbout modalIsOpen={modalIsOpen} closeModal={closeModal}></ModalAbout>
                    </div>
                    <div className="col-md-6 pl-5 pt-5">
                        <span>Birthday:</span> <span style={{ color: '#B0B0B0', paddingLeft: '20px' }}>11-06-1996</span><br />
                        <span>Age:</span> <span style={{ color: '#B0B0B0', paddingLeft: '55px' }}>24</span><br />
                        <span>Address:</span> <span style={{ color: '#B0B0B0', paddingLeft: '25px' }}>Dhaka, Bangladesh</span><br />
                        <span>Email:</span> <span style={{ color: '#B0B0B0', paddingLeft: '40px' }}>Shakif20@gmail.com</span><br />
                        <span>Phone:</span> <span style={{ color: '#B0B0B0', paddingLeft: '35px' }}>+8801849388817</span><br />
                        <span>Freelance:</span> <span style={{ color: '#B0B0B0', paddingLeft: '15px' }}>Available</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
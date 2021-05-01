import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./Home.css"
// import img from "../../images/Screenshot_33.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="row w-100 parent">
            <div className="col-md-2 ">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-12 p-3 home">
                <div className="row home-main">
                    <div className="col-md-5 avatar">
                        {/* <img src={img} alt="" className="img-fluid pl-5"/> */}
                        <div className="image"></div>
                    </div>
                    <div className="col-md-7 pt-5">
                        <h1 style={{ fontSize: '50px' }}>Tanvir Mahtab Shakif</h1>
                        <p style={{ color: '#B0B0B0' }}>I'm a web designer and Front-End Developer, skilled in JavaScript, HTML, CSS, React JS. I have experience with responsive design using multiple frameworks, particularly Bootstrap and Material-UI.</p>
                        <Link to="/files/Front_End_Developer_Resume_Updated.pdf" target="_blank" download type="button" class="btn btn-outline-primary text-white">Download Resume</Link>
                        <div className="icons pt-5">
                            <a href="https://www.facebook.com/ShakifSM/" target="blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="https://www.facebook.com/ShakifSM/" target="blank"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="https://www.linkedin.com/in/tanvir-mahtab-198763194/" target="blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href="https://www.instagram.com/shakifmahtab/" target="blank"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://github.com/Shakifsm" target="blank"><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
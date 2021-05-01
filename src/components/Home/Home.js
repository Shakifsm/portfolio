import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./Home.css"
import img from "../../images/Screenshot_33.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faFacebookF, faLinkedinIn, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    return (
        <div className="row w-100 parent">
            <div className="col-md-2 ">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-12 p-3">
                <div className="row home-main">
                    <div className="col-md-5 avatar">
                        {/* <img src={img} alt="" className="img-fluid pl-5"/> */}
                        <div className="image"></div>
                    </div>
                    <div className="col-md-7 pt-5">
                        <h1 style={{fontSize:'50px'}}>Tanvir Mahtab Shakif</h1>
                        <p style={{color:'#B0B0B0'}}>Creative Photographer based in New York and happy to travel all over Europe to capture photos.</p>
                        <div className="icons">
                            <a href="https://www.facebook.com/ShakifSM/" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="https://www.linkedin.com/in/tanvir-mahtab-198763194/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href="" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://github.com/Shakifsm" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
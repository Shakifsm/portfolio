import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./Projects.css"
import LovePet from "../../images/lovePet.png";
import HotOnion from "../../images/HotOnion.png";
import CityRiders from "../../images/cityRiders.png";
import ITLatitude from "../../images/ITLatitude.png";


const Projects = () => {
    return (
        <div className="row projetcs-parent w-100">
            <div className="col-md-2 ">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-12">
            <div className="project-area p-5">
                    <h3 className="pb-5">Recent Projects</h3>
                    <div className="row w-100">
                        <div className="col-md-6 pb-5">
                            <img src={LovePet} alt="" className="img-fluid" />
                            <h3>Love-Pet-Services</h3>
                            <p style={{color:'#B0B0B0'}}>A complete website where you can book appointments for your pets. You can also give your honest reviews through this website</p>
                            <a href="https://love-pet-81a10.firebaseapp.com/" target="blank"><button className="live">Live</button></a>
                            <a href="https://github.com/Porgramming-Hero-web-course/complete-website-client-Shakifsm" target="blank"><button className="github">Github</button></a>
                            <img src={CityRiders} alt="" className="img-fluid pt-5" />
                            <h3>City-Rides</h3>
                            <p style={{color:'#B0B0B0'}}>A ride sharing react app. Where you can hire your trasport for your desired location. City-Riders is your trusted travel partner.</p>
                            <a href="https://city-riders-14374.firebaseapp.com/" target="blank"><button className="live">Live</button></a>
                            <a href="https://github.com/Porgramming-Hero-web-course/react-auth-Shakifsm" target="blank"><button className="github">Github</button></a>
                        </div>
                        <div className="col-md-6">
                            <img src={HotOnion} alt="" className="img-fluid" />
                            <h3>Red-Onion-Restaurant</h3>
                            <p style={{color:'#B0B0B0'}}>A Front-End restaurant app where you can order your favorite food from the menu. You have optio, More..</p>
                            <a href="https://hot-onion-ec819.firebaseapp.com/" target="blank"><button className="live">Live</button></a>
                            <a href="https://github.com/Shakifsm/hot-onion-server" target="blank"><button className="github">Github</button></a>
                            <img src={ITLatitude} alt="" className="img-fluid pt-5" />
                            <h3>IT-Latitude-Services</h3>
                            <p style={{color:'#B0B0B0'}}>IT Latitude is  a WordPress made IT Service website. Here you can pruchase your IT related services</p>
                            <a href="http://itlatitude.freehackgames.com/" target="blank"><button className="live">Live</button></a>
                            <a href="http://freehackgames.com/" target="blank"><button className="github">Github</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
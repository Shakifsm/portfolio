import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <div classNameName="logo">
                    <Link to="/home"><img src={logo} alt="" /></Link>
                </div> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link mr-5 active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link mr-5">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link mr-5">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog" className="nav-link mr-5">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link mr-5">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
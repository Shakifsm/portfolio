import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar p-5" style={{ height: "100vh", backgroundColor:'#000000' }}>
            <ul className="list-unstyled" style={{paddingTop:'100px'}}>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
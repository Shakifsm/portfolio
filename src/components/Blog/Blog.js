import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./Blog.css"
import hooks from "../../images/blog1.png"
import es6 from "../../images/blog2.png"

const Blog = () => {
    return (
        <div className="blog-parent row w-100">
            <div className="col-md-2 ">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-12">
                <div className="blog-area  p-5">
                <h3 className="pb-5">Latest News</h3>
                <div className="row w-100">
                    <div className="col-md-6 pb-5">
                        <img className="img-fluid" src={hooks} alt=""/>
                        <h3>JavaScript ES5 vs ES6</h3>
                        <p style={{ color: '#B0B0B0' }}>ECMSAScript 2020 is the latest update to the ECMA-262 scripting language standard. However, the update from ES5 (2009) to ES6 (2015) took 6 years to develop, offering a substantial amount of new features that made JavaScript feel almost like a complete new language.</p>
                        <a href="https://medium.com/@shakif20" target="blank"><button className="blog-btn">Read Full Article</button></a>
                    </div>
                    <div className="col-md-6">
                    <img className="img-fluid" src={es6} alt=""/>
                        <h3>Introduction to React Hooks</h3>
                        <p style={{ color: '#B0B0B0' }}>React Hooks are a new addition in React 16.8. They let you use state and other React features in functional components. So in this article we are just going to touch mostly used hooks in React. In the longer term, we expect Hooks to be the primary way people write React components.</p>
                        <a href="https://medium.com/@shakif20" target="blank"><button className="blog-btn">Read Full Article</button></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
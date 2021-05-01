import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./Blog.css"

const Blog = () => {
    return (
        <div className="blog-parent row w-100">
            <div className="col-md-2 ">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-12 pt-5">
                <h3>Latest News</h3>
            </div>
        </div>
    );
};

export default Blog;
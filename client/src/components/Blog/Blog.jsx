import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

const Blog = (props) => {
    return (
        <div>
        <Link className="blog" to={`/blogs/${props._id}`}>
          <img className="blog-image" src={props.imgURL} alt={props.name} onError={(e) => { e.target.onerror = null; e.target.src = "https://pbs.twimg.com/profile_images/1082424539492073477/exU8rYn8_400x400.jpg" }} />
          <div className="blog-date">{props.date}</div>
          <div className="blog-title">{props.title}</div>
          <div className="blog-body">{props.body}</div>
          <div className="blog-author">{props.author}</div>
        </Link>
        </div>
    );
};

export default Blog;
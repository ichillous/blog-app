import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

const Blog = (props) => {
    return (
        <div>
        <Link className="blog" to={`/blogs/${props._id}`}>
          <img className="blog-image" src={props.imgURL} alt={props.name} />
          <div className="blog-date">{props.date}</div>
          <div className="blog-title">{props.title}</div>
          <div className="blog-body">{props.body}</div>
          <div className="blog-author">{props.author}</div>
        </Link>
        </div>
    );
};

export default Blog;
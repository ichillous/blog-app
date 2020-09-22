import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

export default function BlogCard(props) {
  return (
    <div className="blog-card">
      <Link className="card" to={`/blogs/${props._id}`}>
        <img className="blog-card-image" src={props.imgURL} alt={props.title} />
        <div>{props.author}'s post</div>
        <div>{props.date}</div>
      </Link>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

export default function BlogCard(props) {
  return (
    <div className="blog-card">
      <Link className="card" to={`/blogs/${props._id}`} style={{

        color: "black",
        textDecoration: "none",
        textDecorationLine: 'none',
        
      }}>
        <img className="blog-card-image" src={props.imgURL} alt={props.title} onError={(e) => { e.target.onerror = null; e.target.src = "https://pbs.twimg.com/profile_images/1082424539492073477/exU8rYn8_400x400.jpg" }} />
        <div style={{
          display: "flex",
          justifyContent: "space-between",
        }}>
          <div>{props.author}'s post</div>
          <div><h6>{props.date}</h6></div>
        </div>
      </Link>
    </div>
  );
}

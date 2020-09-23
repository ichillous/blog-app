import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout.jsx";
import { getBlog, updateBlog } from "../../services/blogs.js";
import "./BlogEdit.css";

export default function BlogEdit(props) {
  const [blog, setBlog] = useState({
    title: "",
    body: "",
    author: "",
    date: "",
    imgURL: "",
  });

  const [updated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      const blog = await getBlog(id);
      setBlog(blog);
    };
    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { id } = props.match.params;
    const update = await updateBlog(id, blog);
    setUpdated(update);
  };

  if (updated) {
    return <Redirect to={`/blogs/${props.match.params.id}`} />;
  }

  return (
    // <Layout user={props.user}>
    <Layout>
      <div className="blog-edit">
        <div className="image-container">
          <img className="edit-blog-image" src={blog.imgURL} alt={blog.title} />
          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image-url"
              placeholder="Image Link"
              value={blog.imgURL}
              name="imgURL"
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="input-title"
            placeholder="Post Title"
            value={blog.title}
            name="author"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-author"
            placeholder="Author Name"
            value={blog.author}
            name="name"
            required
            onChange={handleChange}
          />
          <input
            className="input-date"
            placeholder="Date"
            value={blog.date}
            name="date"
            required
            onChange={handleChange}
          />
          <textarea
            className="textarea-body"
            rows={15}
            cols={80}
            placeholder="Body"
            value={blog.body}
            name="body"
            required
            onChange={handleChange}
          />
          <button type="submit" className="update-button">
            Update!
          </button>
        </form>
      </div>
    </Layout>
  );
}

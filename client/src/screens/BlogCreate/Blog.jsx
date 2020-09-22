import React, { useState } from "react";
import "./Blog.css";
import Layout from "../../components/shared/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createBlog } from "../../services/blogs";

const Blog = () => {
  const [blog, setBlog] = useState({
    imgURL: "",
    date: "",
    title: "",
    body: "",
    author: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createBlog(blog);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/blogs`} />;
  }
  return (
    // <Layout user={props.user}>
    <Layout>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-title"
          placeholder="Title"
          value={blog.title}
          name="title"
          required
          autoFocus
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
          rows={10}
          placeholder="Body"
          value={blog.body}
          name="body"
          required
          onChange={handleChange}
        />
        <input
          className="input-author"
          placeholder="Author"
          value={blog.author}
          name="author"
          required
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder="Image Link"
          value={blog.imgURL}
          name="imgURL"
          required
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Blog;

import React, { useState, useEffect } from 'react';
import './BlogDetail.css'
import Layout from '../../components/shared/Layout/Layout'
import { getProduct, deleteProduct } from '../../services/blogs'
import { useParams, Link } from 'react-router-dom'

const BlogDetail = (props) => {
    
  const [blog, setBlog] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchBlog = async () => {
      const blog = await getBlog(id)
      setBlog(blog)
      setLoaded(true)
    }
    fetchBlog()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
  
  return (
    <Layout>
      <div className="blog-detail">
        <img className="blog-detail-image" src={blog.imgURL} alt={blog.name} />
        <div className="author">{blog.author}</div>
        <div className="body">{blog.body}</div>
        <div className="button-container">
          <button className="edit-button"><Link className="edit-link" to={`/blogs/${blog._id}/edit`}>Edit</Link></button>
          <button className="delete-button" onClick={() => deleteBlog(blog._id)}>Delete</button>
        </div>
      </div>
    </Layout>
    );
};

export default BlogDetail;
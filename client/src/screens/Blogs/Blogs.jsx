import React, {useState, useEffect } from 'react';
import "./Blogs.css"

import Blog from '../../components/Blog/Blog'
import Search from '../../components/Search/Search'
import { AZ, ZA, lowestFirst, highestFirst } from '../../utils/sort'
import Sort from '../../components/Sort/Sort'
import Layout from '../../components/shared/Layout/Layout'
import { getBlogs } from '../../services/blogs'

const Blogs = (props) => {

  const [allBlogs, setAllBlogs] = useState([])
  const [queriedBlogs, setQueriedBlogs] = useState([])
  const [sortType, setSortType] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getBlogs()
      setAllBlogs(blogs)
      setQueriedBlogs(blogs)
    }
    fetchBlogs()
  }, [])

  const handleSort = type => {
    setSortType(type)
    switch (type) {
      case "name-ascending":
        setQueriedBlogs(AZ(queriedBlogs))
        break
      case "name-descending":
        setQueriedBlogs(ZA(queriedBlogs))
        break
      case "price-ascending":
        setQueriedBlogs(lowestFirst(queriedBlogs))
        break
      case "price-descending":
        setQueriedBlogs(highestFirst(queriedBlogs))
        break
      default:
        break
    }
  }

  const handleSearch = event => {
    const newQueriedBlogs = allBlogs.filter(blog => blog.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setQueriedBlogs(newQueriedBlogs, () => handleSort(sortType))
  }

  const handleSubmit = event => event.preventDefault()

  const blogsJSX = queriedBlogs.map((blog, index) => 
    <Blog _id={blog._id} title={blog.title} imgURL={blog.imgURL} author={blog.author} key={index} body={blog.body} />   
  )


  return (
    <Layout onSubmit={handleSubmit} onChange={handleSearch}>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      {/* <Sort onSubmit={handleSubmit} onChange={handleSort} /> */}
      <div className="blogs">
        {blogsJSX}
      </div>
    </Layout>
    );
};
//hey
export default Blogs;
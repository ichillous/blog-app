import React from 'react';
import "./BlogCards.css";
import BlogCard from '../BlogCard/BlogCard';
import { getBlogs } from '../../services/blogs';

class blogCards extends Component {
  constructor() {
    super()
    this.state = {
      blogs: []
    }
  }

  async componentDidMount() {
    const blogs = await getBlogs()
    this.setState({ blogs })
  }

  render() {

    const CARDS = this.state.blogs.reverse().map((blog, index) => index < 8 ? <BlogCard _id={blog._id} title={blog.title} author={blog.author} body={blog.body} imgURL={blog.imgURL} key={index} /> : null)

    retun (
    <div className="blog-cards">

      <div className="latest">Latest</div>

      <div className="cards">
        {CARDS}
      </div>

      </div>
    )
  }
}

export default BlogCards;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

// Static assets
import groupchild from '../assets/images/groupchild.png';
import ludoplay from '../assets/images/ludoplay.png';
import blocks from '../assets/images/blocks.png';
import arrowright from '../assets/images/arrowright.png';
import listdot from '../assets/images/listdot.png';
import circleiconframe from '../assets/images/circleiconframe.png';

function Latestblog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://mitdevelop.com/kidsadmin/api/blogs', {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.data && response.data.data && Array.isArray(response.data.data.data)) {
          setBlogs(response.data.data.data.slice(0, 3)); // Limit to latest 3 blogs
        } else {
          setBlogs([]); // If no blogs or incorrect structure
        }
      } catch (err) {
        setError('Failed to fetch blogs.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="latest-blog">
      <div className='container'>
        <div className='circle-framee'>
          <img src={circleiconframe} alt='' className='circle-frame circle-frame-two floating-opposite'/>
        </div>
        <h2 className="text-center mt-0">Latest Blog</h2>
        <p className="interactive interactive-one">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. <br />Aliquam in hendrerit urna.</p>
        
        <div className='row blog-gutter program-mobile-preview'>
          {loading ? (
            <p>Loading blogs...</p>
          ) : error ? (
            <p>{error}</p>
          ) : blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div key={index} className='col-lg-4 wid-program'>
                <div className='box-blog'>
                  {/* Use dynamic image */}
                  {blog.images && blog.images.length > 0 ? (
                    <img src={`https://mitdevelop.com/kidsadmin/storage/app/public/${blog.images[0].blog_image}`} alt={blog.blog_name} className="blog-images" />
                  ) : (
                    <img src={groupchild} alt="Default" className="blog-images" />
                  )}

                  <div className='main-display-admin'>
                    <div className='d-flex gap-3'>
                      <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> created by : {blog.user.name}</p></div>
                      <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Date : {new Date(blog.created_at).toLocaleDateString()}</p></div>
                    </div>
                  </div>

                  <h5>{blog.blog_name}</h5>
                  <Link to={`/blog/${blog.slug}`}>
                    <button type="readmore" className='read-more'>
                      Read More <span className='image-arrow-read'><img src={arrowright} alt="" className="blog-images-arrow" /></span>
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No latest blogs available</p>
          )}
        </div>

        <div className='circle-framee'>
          <img src={circleiconframe} alt='' className='circle-frame circle-frame-three floating'/>
        </div>
      </div>
    </section>
  );
}

export default Latestblog;

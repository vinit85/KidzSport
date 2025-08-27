import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

// Static assets
import fancyicon from '../assets/images/fancyicon.png';
import linethree from '../assets/images/linethree.png';
import arrowright from '../assets/images/arrowright.png';
import listdot from '../assets/images/listdot.png';

function Blog() {
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

        console.log(response.data); // Log the full response

        // Make sure we access the correct data structure
        if (response.data && response.data.data && Array.isArray(response.data.data.data)) {
          setBlogs(response.data.data.data);
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
    <section className="Blog-page">
      <div className="bacground-purple">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img src={fancyicon} alt="" className="fancy-icons floating" />
            </div>
            <div className="col-lg-4">
              <h1 className="heading-main text-center">Blog</h1>
              <ul className="breadcrumb justify-content-center text-white align-items-center gap-1">
                <a href="/" className="nav-link">
                  <li>Home | </li>
                </a>
                <a href="/" className="nav-link" style={{ color: "#ffb06c" }}>
                  <li>Blog</li>
                </a>
              </ul>
            </div>
            <div className="col-lg-4">
              <img src={linethree} alt="" className="fancy-iconss floating" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row blog-gutter program-mobile-preview">
          {loading ? (
            <p>Loading blogs...</p>
          ) : error ? (
            <p>{error}</p>
          ) : Array.isArray(blogs) && blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div key={index} className="col-lg-4 wid-program mt-5">
                <div className="box-blog">
                  {/* Ensure that blog_image exists before accessing it */}
                  {blog.images && blog.images.length > 0 ? (
                    <img
                      src={`https://mitdevelop.com/kidsadmin/storage/app/public/${blog.images[blog.images.length - 1].blog_image}`}
                      alt={blog.blog_name}
                      className="blog-images"
                    />
                  ) : (
                    <img
                      src="path/to/default-image.jpg" // Set a default image if no images are available
                      alt="No Image Available"
                      className="blog-images"
                    />
                  )}

                  <div className="main-display-admin">
                    <div className="d-flex gap-3">
                      <div>
                        <p className="admin-name">
                          <span className="color-dot">
                            <img src={listdot} alt="" className="list-dot" />
                          </span>
                          {blog.user.name}
                        </p>
                      </div>
                      <div>
                        <p className="admin-name">
                          <span className="color-dot">
                            <img src={listdot} alt="" className="list-dot" />
                          </span>
                          Date: {new Date(blog.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <h5>{blog.blog_name}</h5>

<Link to={`/blog/${blog.slug}`}>
  {/* Your link content here */}
 
                    <button type="readmore" className="read-more">
                      Read More <span className="image-arrow-read"><img src={arrowright} alt="" className="blog-images-arrow" /></span>
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Blog;

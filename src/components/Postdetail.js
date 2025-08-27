import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import groupPlay from "../assets/images/groupplay.png";
import girlimage from "../assets/images/girlimage.png";
import dateicon from "../assets/images/dateicon.png";
import eyeicon from "../assets/images/eyeicon.png";
import pumpkin from "../assets/images/pumpkin.png";
import tickgreen from "../assets/images/tickgreen.png";
import Search from '../assets/images/search.png';
import { stripHtml } from "string-strip-html";


const Postdetail = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://mitdevelop.com/kidsadmin/api/blog/${slug}`, {
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0',
          },
        });

        if (response.data && response.data.data) {
          setBlog(response.data.data);
          console.log("Blog Description:", blog.description);
        } else {
          console.error("No blog data found");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the blog data:", error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog || !blog.blog_name || !blog.user || !blog.user.name || !blog.images || blog.images.length === 0) {
    return <div>Blog not found or missing required data!</div>;
  }

  return (
    <section className="post-detail">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-lg-8">
            <div className="post-background-color">
              <div>
                <img
                  src={`https://mitdevelop.com/kidsadmin/storage/app/public/${blog.images[0].blog_image}`}
                  alt="Blog header"
                  className="group-play-child"
                />
              </div>
              <div className="d-flex align-items-center gap-2">
                <img
                  src={girlimage}
                  alt="Admin avatar"
                  className="girl-image"
                />
                <p className="admin-bg">By {blog.user.name}</p>
                <p className="admin-bg">
                  Date: {new Date(blog.created_at).toLocaleDateString()}
                </p>
              </div>
              <div>
                <h1 className="top">{blog.blog_name}</h1>
              </div>
              <div>
                {/* Render rich text content safely */}
                <div className="post-pg" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.description) }} />

              </div>
              {/* Features Section */}
              <div className="features-imp">
                {blog.features?.map((feature, index) => (
                  <div className="d-flex gap-2" key={index}>
                    <div>
                      <img src={tickgreen} alt="Tick icon" className="tickgreen-image" />
                    </div>
                    <div>
                      <p className="Empowering-paragraph">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-4">
            <div className="post bg-back-color">
              {/* Search */}
              <form className="d-flex">
                <input
                  style={{ borderRight: "0px" }}
                  className="form-control form-control-search"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="search-button" type="submit">
                  <img src={Search} alt="Search icon" className="search-icon-one" />
                </button>
              </form>
              <h4 className="post">Leave a Comment</h4>
              <p className="email-address">
                Your email address will not be published. Required fields are marked *
              </p>
              {/* Comment Form */}
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" className="form-control" placeholder="Name" required />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" className="form-control" placeholder="Email" required />
                  </div>
                  <div className="col-lg-12 mt-3">
                    <textarea
                      className="form-control"
                      rows="3"
                      id="comment"
                      name="text"
                      placeholder="Comment"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button type="submit" className="submit-button">
                    Submit Now
                  </button>
                </div>
              </form>

              {/* Latest Post */}
              <div>
                <h4 className="post">Latest post</h4>
                {/* Add latest post elements here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Postdetail;
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaArrowRight } from 'react-icons/fa';
import fancyicon from '../assets/images/fancyicon.png'
import linethree from '../assets/images/linethree.png'

function Banner() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch('https://mitdevelop.com/kidsadmin/api/getBanner')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setBanners(data.banners);
        }
      })
      .catch((error) => console.error('Error fetching banners:', error));
  }, []);

  return (
    <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {banners.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {banners.map((banner, index) => (
          <div key={banner.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div className="container">
              <div className="row align-items-center justify-content-center columnn-reverse-one">
                <div className="col-md-6 text-center text-md-start order-md-1">
                  <h1 className="heading-one-hero text-white">{banner.title}</h1>
                  <p className="text-white para-one-hero">{banner.content}</p>
                  {/* Green Rounded Button */}
                  <a
                    href={banner.button_link || '#'}
                    className="book-now-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      
                      color: 'white',
                     justifyContent: 'center',
                      borderRadius: '50px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      textDecoration: 'none',
                      gap: '10px',
                      transition: '0.3s',
                    }}
                  >
                    Book Now <FaArrowRight />
                  </a>
                </div>
                <div className="col-md-6 text-center order-md-2">
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='banner-floating-icons'>
                      <img src={fancyicon} alt="" className="fancy-icons-banner fancy-icons-banner-one floating" />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                    <div className='banner-floating-icons'>
                      <img src={linethree} alt="" className="fancy-icons-banner floating" />
                    </div>
                    </div>
                  </div>
                  <img
                    src={`https://mitdevelop.com/kidsadmin/public/${banner.image}`}
                    alt={banner.title}
                    className="hero-image-kids"
                    
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Banner;

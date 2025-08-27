// src/components/Footer.js
import React from 'react';
import { Link } from "react-router-dom";
import footerlogo from '../assets/images/footerlogo.png';
import twolines from '../assets/images/twolines.png';
import galleryimage from '../assets/images/activityimg.png';
import gi2 from '../assets/images/GI-2.png';
import gi3 from '../assets/images/GI-3.png';
import gi4 from '../assets/images/GI-4.png';
import gi5 from '../assets/images/GI-5.png';
import gi6 from '../assets/images/GI-6.jpg';
import facebookfooter from '../assets/images/facebookfooter.png';
import instafooter from '../assets/images/instafooter.png';
import whatsappfooter from '../assets/images/whatsappfooter.png';
import cloudsfooter from '../assets/images/cloudsfooter.png';
import circlewhite from '../assets/images/circlewhite.png';

const Footer = () => {
  return (
    <footer>
      <section className='footer'>
        <div className='container'>
          <div className='cloudsfooter-footer'>
            <img src={cloudsfooter} alt="" className="cloudsfooter" />
            <img src={circlewhite} alt="" className="circlewhite floating" />
            <img src={circlewhite} alt="" className="circlewhite circlewhite-one floating" />
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='news-letter'>
                <div className='row align-items-center'>
                  <div className='col-lg-6'>
                    <p>Sign up to Our Newsletter for Latest Update</p>
                  </div>
                  <div className='col-lg-6'>
                    <div className="input-group">
                      <input className="form-control" placeholder="Enter Email Here" type="text" name="email" />
                      <button type="submit" className="btn btn-primary input-group-append">Subscribe Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row' style={{ position: 'relative', zIndex: 1 }}>
            <div className='col-lg-4'>
              <img src={footerlogo} alt="" className="footerlogo" />
              <p className='quote-footer-company'>Kidzsport World <br></br>
              403/4th floor, Shree Krishna, kalbadevi road, Shekadi lane Vitthalwadi, Kalbadevi, Mumbai 400002</p>
              <div className='d-inline-flex gap-2'>
                <div><a href="#"><img src={facebookfooter} alt="" className="footer-social-icons" /></a></div>
                <div><a href="#"><img src={instafooter} alt="" className="footer-social-icons" /></a></div>
                <div><a href="#"><img src={whatsappfooter} alt="" className="footer-social-icons" /></a></div>
              </div>
            </div>
            <div className='col-lg-2'>
              <div className='footer-main-heading'>
                <h5 className='footer-heading'>Programs</h5>
                <img src={twolines} alt="" className="two-lines-img-one two-lines-img-two" />
              </div>
              <a href="#"><p className='footer-links'>Fun & Fitness</p></a>
              <a href="#"><p className='footer-links'>Fun & Fitness</p></a>
              <a href="#"><p className='footer-links'>Adventure Explorers</p></a>
              <a href="#"><p className='footer-links'>Team Building</p></a>
            </div>
            <div className='col-lg-2'>
              <div className='footer-main-heading'>
                <h5 className='footer-heading'>Resources</h5>
                <img src={twolines} alt="" className="two-lines-img-one two-lines-img-two" />
              </div>
              <a href="#"><p className='footer-links'>Blog</p></a>
              <a href="#"><p className='footer-links'>FaQs</p></a>
              <Link to="/Privacy-policy"><p className='footer-links'>Privacy Policy</p></Link>
              <Link to="/Disclaimer-policy"><p className='footer-links'>Disclaimer Policy</p></Link>
              <Link to="/Terms-conditions"><p className='footer-links'>Refund Policy</p></Link>
            </div>
            <div className='col-lg-3'>
    <div className='footer-main-heading'>
        <h5 className='footer-heading'>Gallery</h5>
        <img src={twolines} alt="" className="two-lines-img-one two-lines-img-two" />
    </div>
    <div className='d-inline-flex gap-2 mb-2'>
        <div style={{ width: "100px", height: "100px", overflow: "hidden", borderRadius: "10px" }}>
            <img src={galleryimage} alt="" className="galleryimage" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ width: "100px", height: "100px", overflow: "hidden", borderRadius: "10px" }}>
            <img src={gi2} alt="" className="galleryimage" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ width: "100px", height: "100px", overflow: "hidden", borderRadius: "10px" }}>
            <img src={gi3} alt="" className="galleryimage" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
    </div>
    <div className='d-inline-flex gap-2'>
        <div style={{ width: "100px", height: "100px", overflow: "hidden", borderRadius: "10px" }}>
            <img src={gi4} alt="" className="galleryimage" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ width: "100px", height: "100px", overflow: "hidden", borderRadius: "10px" }}>
            <img src={gi5} alt="" className="galleryimage" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ width: "100px", height: "100px", overflow: "hidden", borderRadius: "10px" }}>
            <img src={gi6} alt="" className="galleryimage" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
    </div>
</div>

          </div>
        </div>
        <div className='copyright'>
          <div className='container'>
            <p>Copyright © 2025 Kidzsport World All Rights Reserved</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

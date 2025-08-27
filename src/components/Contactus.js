import React, { useState } from "react";
import axios from "axios";

import fancyicon from "../assets/images/fancyicon.png";
import linethree from "../assets/images/linethree.png";
import contactimg from "../assets/images/contactimg.png";
import rightarrows from "../assets/images/rightarrows.png";
import childbanner from "../assets/images/childbanner.png";

function Contactus() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [responseMessage, setResponseMessage] = useState("");
    const [loading, setLoading] = useState(false);
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage("");

        try {
            const response = await axios.post("http://your-laravel-api.com/api/contact", formData);
            setResponseMessage(response.data.message);
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            setResponseMessage("Failed to send message. Please try again.");
        }

        setLoading(false);
    };

    return (
        <section className='contact-us-sec'>
            <div className='bacground-purple'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <img src={fancyicon} alt="" className="fancy-icons floating" />
                        </div>
                        <div className='col-lg-4'>
                            <h1 className='heading-main text-center'>Contact Us</h1>
                            <ul className='breadcrumb justify-content-center text-white align-items-center gap-1'>
                                <a href='/' className='nav-link'><li>Home | </li></a>
                                <a href='/' className='nav-link' style={{ color: "#ffb06c" }}><li>Contact us</li></a>
                            </ul>
                        </div>
                        <div className='col-lg-4'>
                            <img src={linethree} alt="" className="fancy-iconss floating" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='box-form-contact'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <img src={contactimg} alt="" className="contact-img" />
                        </div>
                        <div className='col-lg-6'>
                            <div className='contact-box'>
                                <h2 className="typing-effect">Let's Talk</h2>
                                <p>Reach out to us for the perfect gift that speaks from the heart!</p>
                                {responseMessage && <p className="response-message">{responseMessage}</p>}
                                <form onSubmit={handleSubmit}>
                                    <input type="text" name="name" className="form-control mb-4" placeholder="Name" required value={formData.name} onChange={handleChange} />
                                    <input type="email" name="email" className="form-control" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
                                    <input type="number" name="phone" className="form-control mb-4" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} />
                                    <textarea name="message" className="form-control" rows="3" placeholder="Comment" required value={formData.message} onChange={handleChange}></textarea>
                                    <button type="submit" className="Know" disabled={loading}>
                                        {loading ? "Submitting..." : "Submit"} <span className='img-right-arrow img-right-arrows'>
                                            <img src={rightarrows} alt='' />
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contactus;

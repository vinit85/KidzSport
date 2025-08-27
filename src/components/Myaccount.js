import React, { useState, useEffect } from 'react';
import fancyicon from '../assets/images/fancyicon.png'
import axios from 'axios'; // Import axios if you are using it
import { useParams } from 'react-router-dom'; // Import useParams to extract id from URL

import linethree from '../assets/images/linethree.png'
import myaccounticon from '../assets/images/myaccounticon.svg'
import activity from '../assets/images/activity.svg'
import subscription from '../assets/images/subscription.svg'
import setting from '../assets/images/setting.svg'
import holderimage from '../assets/images/holderimage.svg'
import cricket from '../assets/images/cricket.png'
import dateicon from "../assets/images/dateicon.png";
import time from "../assets/images/time.png";
import locationimg from "../assets/images/locationimg.png";
import football from '../assets/images/football.png'
import badminton from '../assets/images/badminton.png'
import arrowtransparent from '../assets/images/arrowtransparent.png';
import tickgreen from "../assets/images/tickgreen.png";
import listdot from '../assets/images/listdot.png'
 

function MyAccount() {
  const BASE_URL = "https://mitdevelop.com/kidsadmin"; // Replace with your actual Laravel base URL
  const { id } = useParams(); // Extract id from the URL
  const [activeTab, setActiveTab] = useState('profile'); // Default active tab
  const [profileData, setProfileData] = useState({
    firstName: '',
    middleName: '',
    profilePic: '', // Add profile picture property
    lastName: '',
    dateOfBirth: '',
    gender: '',
    gradeLevel: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    school: '',
    nationality: '',
    language: '',
    aadharNumber: '',
    adharFrontImage: '', 
    adharBackImage: '', 
  });

  useEffect(() => {
    // Fetch data using the dynamic id from URL
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://mitdevelop.com/kidsadmin/api/users/${id}`, {
          headers: {
            'Cookie': '<Your-Cookie-Value>', // Replace with actual cookie if required
          },
        });

        // Log the full response to see the structure
        console.log(response.data); // See how the data is structured
        
        const data = response.data;
        // Assuming data has a structure like { user: { name, last_name, etc. } }
        if (data.user) {
          setProfileData({
            firstName: data.user.name || '',
            middleName: data.user.middle_name || '',
            profilePic: data.user.profile_pic || holderimage, // Use default if profile picture is missing
            lastName: data.user.last_name || '',
            dateOfBirth: data.user.date || '',
            gender: data.user.gender || '',
            gradeLevel: data.user.grade_level || '',
            streetAddress: data.user.address || '',
            city: data.user.city || '',
            state: data.user.state_province || '',
            zipCode: data.user.zip_code || '',
            school: data.user.school || '',
            nationality: data.user.nationality || '',
            language: data.user.languages || '',
            aadharNumber: data.user.adhar_number || '',
            adharFrontImage: data.user.adhar_front ||'', 
            adharBackImage: data.user.adhar_back ||'',
          });
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchData();
  }, [id]); // Re-run effect if id changes


  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.log('No token available');
        return;
      }

      await axios.post(
        'https://mitdevelop.com/kidsadmin/api/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.removeItem('token');
      localStorage.removeItem('userId');

      window.location.href = '/login';
    } catch (error) {
      console.error('Logout error:', error.response?.data || error.message);
    }
  };
  
  
  // Debug: log profileData to see if it has been updated
  useEffect(() => {
    console.log(profileData); // This will log profileData after it's updated
  }, [profileData]);
  const handleTabClick = (tab, e) => {
    e.preventDefault(); // Prevent page reload
    setActiveTab(tab);
  };
  

  return (
    <section className="my-account">
      <div className='bacground-purple'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <img src={fancyicon} alt="" className="fancy-icons floating" />
                        </div>
                        <div className='col-lg-4'>
                            <h1 className='heading-main text-center'>
                                My Account
                            </h1>
                            <ul class="breadcrumb justify-content-center text-white align-items-center gap-1">
                                <a href="/" class="nav-link"><li>Home | </li></a>
                                <a href="/" class="nav-link" style={{ color: "#ffb06c" }}><li>My account</li></a>
                                </ul>
                        </div>
                        <div className='col-lg-4'>
                            <img src={linethree} alt="" className="fancy-iconss floating" />
                        </div>
                    </div>
                </div>
            </div>
      <div className="dashboard-container container">
        {/* Sidebar */}
        <div className="row">
          <div className="col-lg-3">
          
            <aside className="sidebar">
            <div className='hellomsg'>
                      <div className='heyy'>Hello!</div>
                    </div>
              <div className='profilebox'>
                <div className='d-flex align-items-center'>
                  <div><img src={holderimage} alt="" className="holder-image" /></div>
                  <div>
                   
                    <div className='holder-name'>
                    <p>{profileData.firstName} {profileData.lastName}</p>
                    </div>
                    <div className="logout-btn">
  <button type="button" onClick={handleLogout}>
    Logout
  </button>
</div>

                  </div>
                </div>
              </div>
              <ul>
                <li>
                  
                  <a href="#profile" className={`tab-link ${activeTab === 'profile' ? 'active' : ''}`}
                    onClick={(e) => handleTabClick('profile', e)}
                  ><span><img src={myaccounticon} alt="" className="dasboardicons" /></span>Profile</a>

                  {/* <hr className='dashline'></hr> */}
                </li>
                <li>
                  <a
                    href="#activities"
                    className={`tab-link ${activeTab === 'activities' ? 'active' : ''}`}
                    onClick={(e) => handleTabClick('activities', e)}
                  >
                    <span><img src={activity} alt="" className="dasboardicons" /></span>My Activities
                  </a>
                  {/* <hr className='dashline'></hr> */}
                </li>
                <li>
                  <a
                    href="#subscriptions"
                    className={`tab-link ${activeTab === 'subscriptions' ? 'active' : ''}`}
                    onClick={(e) => handleTabClick('subscriptions', e)}
                  >
                    <span><img src={subscription} alt="" className="dasboardicons" /></span>Subscriptions
                  </a>
                  {/* <hr className='dashline'></hr> */}
                </li>
                <li>
                  <a
                    href="#settings"
                    className={`tab-link ${activeTab === 'settings' ? 'active' : ''}`}
                    onClick={(e) => handleTabClick('settings', e)}
                  >
                    <span><img src={setting} alt="" className="dasboardicons" /></span>Settings
                  </a>
                  {/* <hr className='dashline'></hr> */}
                </li>
              </ul>
            </aside>
          </div>

          {/* Main Content */}
          <div className="col-lg-9">
            <main className="main-content">
              <section
                id="profile"
                className={`tab-content ${activeTab === 'profile' ? 'active' : ''}`}
              >
                <h2>Your Profile</h2>
                <div className='row'>
                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" value={profileData.firstName} id="firstName" placeholder="First Name" />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" value={profileData.middleName} id="middleName" placeholder="Middle Name" />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" value={profileData.lastName} id="lastName" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="col-lg-4">
  <div className="mb-4">
    <input
      type="date"
      className="form-control form-date"
      value={profileData.dateOfBirth} // Bind value to dateOfBirth
      id="date"
      name="date"
      onChange={(e) => setProfileData({ ...profileData, dateOfBirth: e.target.value })} // Update state on change
    />
  </div>
</div>

                                {/* <div className='col-lg-4'>
                                    <div className="mb-4">
                                        <select class="form-select" id="sel2" name="sellist2"><option>Gender</option><option>Male</option><option>Female</option></select>
                                    </div>
                                </div> */}
                                <div className="col-lg-4">
  <div className="mb-4">
    <select 
      className="form-select" 
      id="gender" 
      name="gender" 
      value={profileData.gender} // Bind value to profileData.gender
      onChange={(e) => setProfileData({ ...profileData, gender: e.target.value })} // Update gender on change
    >
      <option value="">Select Gender</option> {/* Default placeholder */}
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
  </div>
</div>

                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" value={profileData.gradeLevel} id="GradeLevel" placeholder="Grade Level (e.g., Kindergarten, 1st Grade, etc.)" />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" value={profileData.streetAddress} id="Streetaddress" placeholder="Street Address" />
                                    </div>
                                </div>
                                <div className='col-lg-2'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" value={profileData.city} id="City" placeholder="City" />
                                    </div>
                                </div>
                                <div className='col-lg-2'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" value={profileData.state} id="Stateprovince" placeholder="State/Province" />
                                    </div>
                                </div>
                                <div className='col-lg-2'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" value={profileData.zipCode} id="Zipcode" placeholder="Zip/Postal Code" />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" value={profileData.school} id="School" placeholder="School" />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" value={profileData.nationality} id="Nationality" placeholder="Nationality" />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" value={profileData.language} id="Language" placeholder="Language(s) Spoken at Home" />
                                    </div>
                                </div>
                                <div className='col-lg-4 adhar-field'>
                                    <div className="mb-4 last-feild-col">
                                    <label htmlFor="firstName" className="form-label"><span className='color-dot'><img src={listdot} alt="" className="list-dot list-dot-two" /></span> Aadhar Number</label>
                                        <input type="text" className="form-control" value={profileData.aadharNumber} id="Adharcard" placeholder="Addhar Card Number" />
                                    </div>
                                </div>
                                

<div className='col-lg-4 adhar-field'>
  <div className="mb-4 last-feild-col">
    <label htmlFor="adharFront" className="form-label">
      <span className='color-dot'>
        <img src={listdot} alt="" className="list-dot list-dot-two" />
      </span> 
      Aadhar Card Front
    </label>
    <div className="input-group">
      <input 
        type="text" 
        className="form-control" 
        value={profileData.adharFrontImage ? `${BASE_URL}/storage/app/public/${profileData.adharFrontImage}` : ''} 
        id="AdharcardFront" 
        placeholder="Aadhar Card Front Image URL" 
        readOnly 
      />
      {profileData.adharFrontImage && (
        <a 
          href={`${BASE_URL}/storage/app/public/${profileData.adharFrontImage}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn"
          style={{ backgroundColor: "#ff6600", color: "#fff" }}
        >
          View
        </a>
      )}
    </div>
  </div>
</div>

<div className='col-lg-4 adhar-field'>
  <div className="mb-4 last-feild-col">
    <label htmlFor="adharBack" className="form-label">
      <span className='color-dot'>
        <img src={listdot} alt="" className="list-dot list-dot-two" />
      </span> 
      Aadhar Card Back
    </label>
    <div className="input-group">
      <input 
        type="text" 
        className="form-control" 
        value={profileData.adharBackImage ? `${BASE_URL}/storage/${profileData.adharBackImage}` : ''} 
        id="AdharcardBack" 
        placeholder="Aadhar Card Back Image URL" 
        readOnly 
      />
      {profileData.adharBackImage && (
        <a 
          href={`${BASE_URL}/storage/${profileData.adharBackImage}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn"
           style={{ backgroundColor: "#ff6600", color: "#fff" }}
        >
          View
        </a>
      )}
    </div>
  </div>
</div>


                            </div>
              </section>

              <section
                id="activities"
                className={`tab-content ${activeTab === 'activities' ? 'active' : ''}`}
              >
                <h2>My Activities</h2>
                <div className='row'>
                  
                  <div className='col-lg-5'>
                    <div className='main-box-activity'>
                    <div className='image-box-one'>
                    <img src={cricket} alt="" className="blog-images blog-images-ones blog-images-ones-two" />

                    </div>
                    <div className='upcoming-box'>
                    <h3>Cricket Upcoming</h3>
                    <hr></hr>
                      <div className='d-flex justify-content-between flex-wrap'>
                        <div> <p className='detail-upcoming'><span className=''><img src={dateicon} alt="" className="date-icon" /></span> 15 jan 2025</p></div>
                        <div> <p className='detail-upcoming'><span className=''><img src={time} alt="" className="date-icon" /></span> 10:00 am To 12:00 pm</p></div>
                        <div> <p className='detail-upcoming'><span className=''><img src={locationimg} alt="" className="date-icon" /></span> Mohali</p></div>
                        <hr></hr>
                      </div>
                    
                     
                      <div className='detailbtn'>
                      <button className='join-now'>Join Now <span><img src={arrowtransparent} alt="" className="arrow-circle-img" /></span></button>
                      </div>
                    </div>
                  </div>
                  </div>
                  
                  <div className='col-lg-5'>
                    <div className='main-box-activity'>
                    <div className='image-box-one'>
                    <img src={football} alt="" className="blog-images blog-images-ones blog-images-ones-two" />

                    </div>
                    <div className='upcoming-box'>
                    <h3>Football Upcoming</h3>
                    <hr></hr>
                      <div className='d-flex justify-content-between flex-wrap'>
                        <div> <p className='detail-upcoming'><span className=''><img src={dateicon} alt="" className="date-icon" /></span> 15 jan 2025</p></div>
                        <div> <p className='detail-upcoming'><span className=''><img src={time} alt="" className="date-icon" /></span> 10:00 am To 12:00 pm</p></div>
                        <div> <p className='detail-upcoming'><span className=''><img src={locationimg} alt="" className="date-icon" /></span> Mohali</p></div>
                        <hr></hr>
                      </div>
                    
                     
                      <div className='detailbtn'>
                      <button className='join-now'>Join Now <span><img src={arrowtransparent} alt="" className="arrow-circle-img" /></span></button>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className='col-lg-5'>
                    <div className='main-box-activity'>
                    <div className='image-box-one'>
                    <img src={cricket} alt="" className="blog-images blog-images-ones blog-images-ones-two" />

                    </div>
                    <div className='upcoming-box'>
                    <h3>Cricket Upcoming</h3>
                    <hr></hr>
                      <div className='d-flex justify-content-between flex-wrap'>
                        <div> <p className='detail-upcoming'><span className=''><img src={dateicon} alt="" className="date-icon" /></span> 15 jan 2025</p></div>
                        <div> <p className='detail-upcoming'><span className=''><img src={time} alt="" className="date-icon" /></span> 10:00 am To 12:00 pm</p></div>
                        <div> <p className='detail-upcoming'><span className=''><img src={locationimg} alt="" className="date-icon" /></span> Mohali</p></div>
                        <hr></hr>
                      </div>
                    
                     
                      <div className='detailbtn'>
                      <button className='join-now'>Join Now <span><img src={arrowtransparent} alt="" className="arrow-circle-img" /></span></button>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className='col-lg-7'>
                      <div className='box-events'>
                    <div className='row'>
                      <div className='col-lg-6'>
                      <div className='image-box-one'>
                    <img src={football} alt="" className="blog-images blog-images-ones" />
                    </div>
                    <div className='upcoming-box-one'>
                      <h4>Upcoming events</h4>
                    </div>
                      </div>
                      <div className='col-lg-6'>
                      <div className='image-box-one'>
                    <img src={badminton} alt="" className="blog-images blog-images-ones" />
                    </div>
                    <div className='upcoming-box-one'>
                      <h4>Visit events</h4>
                    </div>
                      </div>
                      <div className='col-lg-6'>
                      <div className='image-box-one'>
                    <img src={cricket} alt="" className="blog-images blog-images-ones" />
                    </div>
                    <div className='upcoming-box-one'>
                      <h4>Past Events</h4>
                    </div>
                      </div>
                      <div className='col-lg-6'>
                      <div className='image-box-one'>
                    <img src={cricket} alt="" className="blog-images blog-images-ones" />
                    </div>
                    <div className='upcoming-box-one'>
                      <h4>Past events</h4>
                    </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </section>

              <section
                id="subscriptions"
                className={`tab-content ${activeTab === 'subscriptions' ? 'active' : ''}`}
              >
                <h2>Subscriptions</h2>
               <div className='row'>
                <div className='col-lg-4'>
                  <div className='subscription-box'>
                    <div className='content-subscrition'>
                      <h3>BASIC</h3>
                      <p>₹99/ Month</p>
                      <div className="d-flex gap-2">
                                <div>
                                    <img src={tickgreen} alt="Tick icon" className="tickgreen-image" />
                                </div>
                                <div>
                                    <p className="sub-points">Lorem ipsum dolor sit amet 

                                    </p>
                                </div>
                            </div>
                      <div className="d-flex gap-2">
                                <div>
                                    <img src={tickgreen} alt="Tick icon" className="tickgreen-image" />
                                </div>
                                <div>
                                    <p className="sub-points">Lorem ipsum dolor sit amet 

                                    </p>
                                </div>
                            </div>
                      <div className="d-flex gap-2">
                                <div>
                                    <img src={tickgreen} alt="Tick icon" className="tickgreen-image" />
                                </div>
                                <div>
                                    <p className="sub-points">Lorem ipsum dolor sit amet 

                                    </p>
                                </div>
                            </div>
                      <div className='get-started'>
                        <button>Get Started</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='subscription-box standard'>
                    <div className='content-subscrition standard-one'>
                      <h3>STANDARD</h3>
                      <p>₹199/ Month</p>
                      <div className="d-flex gap-2">
                                <div>
                                    <img src={tickgreen} alt="Tick icon" className="tickgreen-image" />
                                </div>
                                <div>
                                    <p className="sub-points">Lorem ipsum dolor sit amet 

                                    </p>
                                </div>
                            </div>
                      <div className="d-flex gap-2">
                                <div>
                                    <img src={tickgreen} alt="Tick icon" className="tickgreen-image" />
                                </div>
                                <div>
                                    <p className="sub-points">Lorem ipsum dolor sit amet 

                                    </p>
                                </div>
                            </div>
                      <div className="d-flex gap-2">
                                <div>
                                    <img src={tickgreen} alt="Tick icon" className="tickgreen-image" />
                                </div>
                                <div>
                                    <p className="sub-points">Lorem ipsum dolor sit amet 

                                    </p>
                                </div>
                            </div>
                      <div className='get-started green-btn'>
                        <button>Get Started</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='subscription-box'>
                    <div className='content-subscrition'>
                      <h3>PREMIUM</h3>
                      <p>₹1631/ Month</p>
                      <div className="d-flex gap-2">
                                <div>
                                    <img src={tickgreen} alt="Tick icon" className="tickgreen-image" />
                                </div>
                                <div>
                                    <p className="sub-points">Lorem ipsum dolor sit amet 

                                    </p>
                                </div>
                            </div>
                      <div className="d-flex gap-2">
                                <div>
                                    <img src={tickgreen} alt="Tick icon" className="tickgreen-image" />
                                </div>
                                <div>
                                    <p className="sub-points">Lorem ipsum dolor sit amet 

                                    </p>
                                </div>
                            </div>
                      <div className="d-flex gap-2">
                                <div>
                                    <img src={tickgreen} alt="Tick icon" className="tickgreen-image" />
                                </div>
                                <div>
                                    <p className="sub-points">Lorem ipsum dolor sit amet 

                                    </p>
                                </div>
                            </div>
                      <div className='get-started'>
                        <button>Get Started</button>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
              </section>

              <section
                id="settings"
                className={`tab-content ${activeTab === 'settings' ? 'active' : ''}`}
              >
                <h2>Settings</h2>
                <p>Customize your dashboard and update account settings.</p>
              </section>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyAccount;

import React, { useState } from 'react';
import login from '../assets/images/login.png';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('email'); // Default to email login
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const navigate = useNavigate();

  const checkMobileAndSendOtp = async () => {
    setError('');
    setLoading(true);
    try {
      const response = await axios.post('https://mitdevelop.com/kidsadmin/api/send-otp', {
        phone_number: mobile,
      });

      if (response.status === 200) {
        setOtpSent(true);
        setError('');
      } else {
        setError('This phone number is not registered.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      setError(error.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    setLoading(true);
    setError('');
    try {
      // Call backend API to verify OTP
      const response = await axios.post('https://mitdevelop.com/kidsadmin/api/verify-otp', {
        phone_number: mobile,
        otp: otp,
      });

      if (response.status === 200) {
        // Store token and user data in localStorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.user.id);

        // Redirect to user account page
        navigate(`/Myaccount/${response.data.user.id}`);
      } else {
        setError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    console.log("Login Request:", { email, password });
  
    try {
      const response = await axios.post('https://mitdevelop.com/kidsadmin/api/login', {
        email,
        password,
      });
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.user.id);
        navigate(`/Myaccount/${response.data.user.id}`);
      } else {
        setError('Invalid email or password.');
      }
    } catch (error) {
      setError('Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <section className="Login-page">
      <div className="container">
        <div className="box-login">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={login} alt="Login" className="login-images" />
            </div>
            <div className="col-lg-6">
              <form onSubmit={activeTab === 'email' ? handleEmailLogin : (e) => { e.preventDefault(); verifyOtp(); }}>
                <h2 className="text-center fw-bold">Members Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="toggle-container">
  <span 
    className={`toggle-option ${activeTab === 'email' ? 'active' : ''}`} 
    onClick={() => setActiveTab('email')}
  >
    Email Login
  </span>
  <span 
    className={`toggle-option ${activeTab === 'mobile' ? 'active' : ''}`} 
    onClick={() => setActiveTab('mobile')}
  >
    Mobile Login
  </span>
</div>


                {activeTab === 'email' && (
                  <>
                    <div className="mb-3 text-center">
                    <input 
                  type="email" 
                  className="form-control w-75 mx-auto" 
                  placeholder="Enter email" 
                  name="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />

                    </div>
                    <div className="mb-3">
                      <input type="password" className="form-control w-75 mx-auto" placeholder="Enter password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary-login">Login</button>
                  </>
                )}
                {activeTab === 'mobile' && (
                  <>
                    <div className="mb-3">
                      <input type="text" className="form-control w-75 mx-auto" placeholder="Enter mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    </div>
                    {!otpSent && <button type="button" className="btn btn-primary-otp" onClick={checkMobileAndSendOtp}>Send OTP</button>}
                    {otpSent && !otpVerified && (
                      <div className="mb-3">
                        <input type="text" className="form-control w-75 mx-auto" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)}/>
                        <button 
                          type="button" 
                          className="btn verify-otp-btn mt-2" 
                          onClick={verifyOtp}
                        >
                          Verify OTP
                        </button>

                      </div>
                    )}
                  </>
                )}
                <p className="register-now-btn">If you're a New User, Please Register first! <span className="Register-span"><Link to="/stepform"> Register Now</Link></span></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Event from "./components/Event";
import Whychoose from "./components/Whychoose";
import Programm from "./components/Programm";
import Testimonial from "./components/Testimonial";
import Sponsors from "./components/Sponsors";
import Register from "./components/Register";
import Latestblog from "./components/Latestblog";
import Stepform from "./components/Stepform";
import Programmdetail from "./components/Programmdetail";
import Aboutus from "./components/Aboutus";
import Blog from "./components/Blog";
import Postdetail from "./components/Postdetail";
import Contactus from "./components/Contactus";
import ScrollToTop from "./components/ScrollToTop";
import Eventform from "./components/Eventform";
import Myaccount from "./components/Myaccount";
import Sportsstore from "./components/Sportsstore";
import Login from "./components/Login";
import Footer from "./components/Footer";
import DisclaimerPolicy from "./components/DisclaimerPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditionPolicy from "./components/TermsCondition";
import SportsCoaching from "./components/SportsCoaching";
import LiveStreaming from "./components/LiveStreaming";
import MyRuppeeCoin from "./components/MyRuppeeCoin";
import EventDetail from "./components/EventDetail";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/style.css";

function App() {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    if (!sessionStorage.getItem("sessionLocation")) {
      setTimeout(() => setIsLocationOpen(true), 1000);
      sessionStorage.setItem("sessionLocation", "true");
    }
  }, []);
  
  

  const fetchLocation = async () => {
    try {
      const apiKey = "AIzaSyDo73Df-UckCfpBX8aQI-TqCD4wLXWZFQU"; 
  
      console.log("Fetching user location...");
  
      const response = await fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`, {
        method: "POST",
      });
  
      const data = await response.json();
      console.log("Google Geolocation Response:", data);
  
      if (data.location) {
        const { lat, lng } = data.location;
        console.log(`Latitude: ${lat}, Longitude: ${lng}`);
  
        // Reverse geocode
        const geocodeResponse = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
        );
        const geocodeData = await geocodeResponse.json();
        console.log("Reverse Geocode Response:", geocodeData);
  
        if (geocodeData.results.length > 0) {
          const addressComponents = geocodeData.results[0].address_components;
          const stateComponent = addressComponents.find((comp) => comp.types.includes("administrative_area_level_1"));
  
          if (stateComponent) {
            const userState = stateComponent.long_name;
            console.log("Detected State:", userState);
            setSelectedState(userState);
            localStorage.setItem("userState", userState);
            setIsLocationOpen(false);
          } else {
            console.error("State not found in response.");
          }
        }
      } else {
        console.error("Location data not available.");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };
  
  

  return (
    <Router>
      <ScrollToTop />


      <Header selectedState={selectedState} />
      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <About />
                <Event />
                <Whychoose />
                <Programm />
                <Testimonial />
                <Sponsors />
                <Latestblog />
              </>
            }
          />
          <Route path="stepform" element={<Stepform />} />
          <Route path="events" element={<Programmdetail />} />
          <Route path="Aboutus" element={<Aboutus />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="Contactus" element={<Contactus />} />
          <Route path="Checkout/:slug" element={<Eventform />} />
          <Route path="Sportsstore" element={<Sportsstore />} />
          <Route path="/myaccount/:id" element={<Myaccount />} />
          <Route path="/blog/:slug" element={<Postdetail />} />
          <Route path="/Privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/Disclaimer-policy" element={<DisclaimerPolicy />} />
          <Route path="/Terms-conditions" element={<TermsConditionPolicy />} />
          <Route path="/Sports-coaching" element={<SportsCoaching />} />
          <Route path="/Live-streaming" element={<LiveStreaming />} />
          <Route path="/My-Rupee-Coin" element={<MyRuppeeCoin />} />
          <Route path="/event/:slug" element={<EventDetail />} />
          <Route path="Login" element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}


export default App;

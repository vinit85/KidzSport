import React, { useState, useEffect } from "react";
import watchImg from "../assets/images/watch-img.png";
import facebookImg from "../assets/images/facebook (2).png";
import instagramImg from "../assets/images/instagram (2).png";
import whatsappImg from "../assets/images/whatsapp (2).png";

function Header() {
  const [location, setLocation] = useState({
    state: sessionStorage.getItem("userState") || "",
  });
  

  useEffect(() => {
    const fetchGoogleLocation = async () => {
      try {
        const apiKey = "AIzaSyDo73Df-UckCfpBX8aQI-TqCD4wLXWZFQU"; // Replace with your API key

        console.log("Fetching user location from Google...");

        const response = await fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`, {
          method: "POST",
        });

        const data = await response.json();
        console.log("Google Geolocation Response:", data);

        if (data.location) {
          const { lat, lng } = data.location;

          // Reverse Geocode
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
              console.log("Detected State from Google:", userState);
              setLocation({ state: userState });
              sessionStorage.setItem("userState", userState); // Stores only for the session              
              return;
            }
          }
        }
      } catch (error) {
        console.error("Google Geolocation API failed:", error);
      }

      // Fallback to ip-api if Google fails
      fetchIpApiLocation();
    };

    const fetchIpApiLocation = async () => {
      try {
        console.log("Fetching user location from ip-api.com...");
        const response = await fetch("http://ip-api.com/json");
        const data = await response.json();

        if (data.status === "success") {
          const { regionName: state } = data;
          console.log("Detected State from ip-api:", state);

          setLocation({ state });
          localStorage.setItem("userState", state);
        }
      } catch (error) {
        console.error("ip-api.com failed:", error);
      }
    };

    if (!location.state) {
      fetchGoogleLocation();
    }
  }, [location.state]);

  return (
    <header className="bg-success-one text-white p-2">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="header-one">
          <i className="fa-brands fa-whatsapp text-white fs-5"></i>
          <span>+91 9011113322</span> |
          <img src={watchImg} alt="Watch Icon" className="watch-img" />
          <span>9:30 am - 6:30 pm - Mon - Sat</span>

          {/* Show detected state only */}
          {location.state && (
            <>
              {" | "}
              <i className="fas fa-map-marker-alt" style={{ color: "white", fontSize: "18px", marginRight: "5px" }}></i>
              <span>{location.state}</span>
            </>
          )}
        </div>

        <div className="social-icons">
          <div><img src={facebookImg} alt="Facebook" className="facebook2" /></div>
          <div><img src={instagramImg} alt="Instagram" className="facebook2" /></div>
          <div><img src={whatsappImg} alt="WhatsApp" className="facebook2" /></div>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import girlimage from "../assets/images/girlimage.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; // Import navigate




const EventDetail = () => {
  const { slug } = useParams();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("");
  const [filteredBatches, setFilteredBatches] = useState([]);
  const [selectedBatches, setSelectedBatches] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`https://mitdevelop.com/kidsadmin/api/event/${slug}`);
        console.log("Event API Response:", response.data); 
  
        if (response.data && response.data.data) {
          setEvent(response.data.data);
          setCities(response.data.data.cities || []);
          setDivisions(response.data.data.divisions || []);
          setAreas(response.data.data.areas || []);
          setFilteredBatches(response.data.data.batches || []); 
        }
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [slug]);
  
  useEffect(() => {
    if (event && selectedCity) {
      const cityObj = event?.cities?.find(city => city.id.toString() === selectedCity);
  
      if (cityObj) {
        const cityName = cityObj.city.trim().toLowerCase();
  
        if (cityName === "mohali" || cityName === "mumbai") { 
          setDivisions(event.divisions ?? []); 
        } else {
          setDivisions([]); 
        }
      } else {
        setDivisions([]); 
      }
    } else {
      setDivisions([]);
    }
    setSelectedDivision(""); 
  }, [selectedCity, event]);
  
  
    useEffect(() => {
      if (selectedCity === "133024") {  
      axios.get("https://mitdevelop.com/kidsadmin/api/get-areas")
        .then((response) => {
          console.log("Areas API Response:", response.data); 
          if (response.data.success && Array.isArray(response.data.data)) {
            setAreas(response.data.data);  
          } else {
            console.error("Invalid areas data:", response.data);
            setAreas([]);  
          }
        })
        .catch((error) => {
          console.error("Error fetching areas:", error);
          setAreas([]);  
        });
      } else {
        setAreas([]);  
      }
      setSelectedArea(""); 
      }, [selectedCity]);  

      const handleBatchSelection = (batchId) => {
        setSelectedBatches((prevSelected) =>
        prevSelected.includes(batchId)
          ? prevSelected.filter((id) => id !== batchId) 
          : [...prevSelected, batchId] 
      );
    };
    useEffect(() => {
      if (event?.age_group) {
        setSelectedAgeGroup(event.age_group);
      }
    }, [event]);
    
    const [errors, setErrors] = useState({
      city: "",
      ageGroup: "",
      batches: "",
    });
    
    const validateForm = () => {
      let valid = true;
      let newErrors = { city: "", ageGroup: "", batches: "" };
  
      if (!selectedCity) {
        newErrors.city = "City is required";
        valid = false;
      }
      if (!selectedAgeGroup) {
        newErrors.ageGroup = "Age group is required";
        valid = false;
      }
      if (selectedBatches.length === 0) {
        newErrors.batches = "Please select at least one batch";
        valid = false;
      }
  
      setErrors(newErrors);
      return valid;
    };

    const handleRegisterClick = () => {
      console.log("Register button clicked!");
    
      // Run validation
      if (!validateForm()) {
        console.log("Validation failed:", errors);
        return; // Stop execution if validation fails
      }
    
      const token = localStorage.getItem("token");
    
      if (!token) {
        Swal.fire({
          icon: "warning",
          title: "Authentication Required",
          text: "You need to log in to register for this event.",
          confirmButtonText: "Go to Login",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login");
          }
        });
      } else {
        console.log("Token found! Redirecting to Checkout...");
        navigate(`/Checkout/${slug}`);
      }
    };
    
    
    
    if (loading) return <div>Loading...</div>;
    if (!event) return <div>Event not found!</div>;

      return (
        <section className="post-detail">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="post-background-color">
              <img src={`https://mitdevelop.com/kidsadmin/storage/app/public/${event.event_image}`} alt="Event" className="group-play-child" />
              <div className="d-flex align-items-center gap-2">
                <img src={girlimage} alt="Organizer" className="girl-image" />
                <p className="admin-bg">By {event.user}</p>
                <p className="admin-bg">Date: {new Date(event.created_at).toLocaleDateString()}</p>
              </div>
              <h1 className="top">{event.event_name}</h1>
              <div className="post-pg" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(event.description) }} />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="post bg-back-color">
              <h4 className="post">Register for Event</h4>
              <select className="form-control mb-2" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                <option value="">Select City</option>
                {cities.map((city) => <option key={city.id} value={city.id}>{city.city}</option>)}
              </select>
              <div className="text-danger">{errors.city}</div>
              <select className="form-control mb-2" value={selectedDivision} onChange={(e) => setSelectedDivision(e.target.value)}>
                <option value="">Select Division</option>
                {divisions.map((division) => <option key={division.id} value={division.id}>{division.division}</option>)}
              </select>
              
              <select 
                className="form-control mb-2" 
                  value={selectedArea} 
                  onChange={(e) => setSelectedArea(e.target.value)}
                >
                  <option value="">Select Area</option>
                  {areas.length > 0 ? (
                    areas.map((area) => (
                      <option key={area.id} value={area.id}>{area.area}</option>
                    ))
                  ) : (
                    <option disabled>No areas available</option>  
                  )}
                </select>

                {/* Age Group Dropdown */}
                <select
              className="form-control mb-2"
              value={selectedAgeGroup || event?.age_group || ""}
              onChange={(e) => setSelectedAgeGroup(e.target.value)}
            >
              <option value="">Select Age Group</option>
              <option value="10-12">10-12</option>
              <option value="12-14">12-14</option>
              <option value="14-16">14-16</option>
              <option value="16-18">16-18</option>
            </select>

           {/* Batches Selection */}
        {filteredBatches.length > 0 ? (
          filteredBatches.map((batch) => (
        <div key={batch.id} className="form-check border p-2 mb-2 rounded">
          <input
        type="checkbox"
        className="form-check-input"
        id={`batch-${batch.id}`}
        value={batch.id}
        checked={selectedBatches.includes(batch.id)}
        onChange={() => handleBatchSelection(batch.id)}
      />
      <label className="form-check-label" htmlFor={`batch-${batch.id}`}>
        <strong>{batch.batch_name}</strong>
      </label>
      <p className="small text-muted mb-0">
        Boys: {batch.boys_quantity} | Girls: {batch.girls_quantity} | Total: {batch.total}
      </p>
      <p className="small text-warning mb-0">
        Waiting List - Boys: {batch.waiting_boys}, Girls: {batch.waiting_girls}, Total: {batch.waiting_total}
      </p>
    </div>
      ))
    ) : (
      <p>No batches available for this event.</p> 
    )}
    <div className="text-danger">{errors.batches}</div>
           
            <button className="btn btn-success mt-3" onClick={handleRegisterClick}>
      Register Event
    </button>


            </div>
          </div>
        </div>
      </div>
    </section>
    );
  };

export default EventDetail;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import fancyicon from "../assets/images/fancyicon.png";
import linethree from "../assets/images/linethree.png";
import rightarrows from "../assets/images/rightarrows.png";

function Eventform() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    registrationNumber: "",
    studentName: "",
    sport: "",
    ageGroup: "",
    state: "",
    city: "",
    division: "",
    area: "",
    email: "",
    phone: "",
    amount: 10,
  });

  const [message, setMessage] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);

  useEffect(() => {
    const fetchEventData = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
  
      try {
        const response = await axios.get(
          `https://mitdevelop.com/kidsadmin/api/event/${slug}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
  
        const event = response.data.data || null; 
  
        if (!event || !event.id) {
          setMessage("No event found or invalid event slug.");
          setFormData((prev) => ({
            ...prev,
            event_id: "",  
            sport: "",
            ageGroup: "",
            state: "",
            city: "",
            division: "",
            area: "",
          }));
          return;
        }
  
        setFormData((prev) => ({
          ...prev,
          event_id: event.id,
          sport: event.category || "",
          ageGroup: event.age_group || "",
          state: event.state || "",
          city: event.city || "",
          division: event.division || "",
          area: event.area || "",
        }));
      } catch (error) {
        console.error("Error fetching event data:", error);
        setMessage("Error fetching event details. Please try again.");
        setFormData((prev) => ({
          ...prev,
          event_id: "", 
          sport: "",
          ageGroup: "",
          state: "",
          city: "",
          division: "",
          area: "",
        }));
      }
    };
  
    fetchEventData();
  }, [slug]);
  
  

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await axios.get("https://mitdevelop.com/kidsadmin/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const user = response.data.user || {};
        setFormData((prev) => ({
          ...prev,
          user_id: user.id,
          registrationNumber: user.customer_id || "",
          studentName: user.name || "",
          email: user.email || "",
          phone: user.phone_number || "",
        }));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setCheckboxError(false); 
  };

  const [orderId, setOrderId] = useState(null); 

  const handlePayment = async () => {
    if (!isChecked) {
        setCheckboxError(true);
        return;
    }

    const token = localStorage.getItem("token");
    if (!token) return alert("User not authenticated!");

    if (!formData.event_id || !formData.user_id) {
        return alert("Event or user data not loaded. Please try again.");
    }

    try {
        const response = await axios.post(
            "https://mitdevelop.com/kidsadmin/api/initiate-payment",
            {
                amount: formData.amount,
                email: formData.email,
                phone: formData.phone,
                name: formData.studentName,
                user_id: formData.user_id,
                event_id: formData.event_id,
            },
            { headers: { Authorization: `Bearer ${token}` } }
        );

        console.log("API Response:", response.data);

        if (response.data.status === "CREATED" && response.data.payment_links) {
            const orderId = response.data.order_id; // Store order_id
            setOrderId(orderId);
            localStorage.setItem("order_id", orderId); // Store in localStorage for later use

            window.open(response.data.payment_links.web || response.data.payment_links.mobile, "_blank");
        } else {
            alert("Payment initiation failed. Please try again.");
        }
    } catch (error) {
        console.error("Error processing payment:", error.response?.data || error.message);
        alert(`Payment failed: ${error.response?.data?.message || "Unknown error"}`);
    }
};



const handlePaymentSuccess = async (orderId) => {
  try {
      const response = await axios.post(
          "https://mitdevelop.com/kidsadmin/api/payment-success",
          { order_id: orderId },
          { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      alert(response.data.message);
  } catch (error) {
      console.error("Error handling payment success:", error.response?.data || error.message);
      alert("Error processing successful payment.");
  }
};

const handlePaymentFailure = async (orderId) => {
  try {
      const response = await axios.post(
          "https://mitdevelop.com/kidsadmin/api/payment-failure",
          { order_id: orderId },
          { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      alert(response.data.message);
  } catch (error) {
      console.error("Error handling payment failure:", error.response?.data || error.message);
      alert("Error processing failed payment.");
  }
};

useEffect(() => {
  const query = new URLSearchParams(location.search);
  const paymentStatus = query.get("status");
  const storedOrderId = localStorage.getItem("order_id");

  if (paymentStatus === "success" && storedOrderId) {
      handlePaymentSuccess(storedOrderId);
      localStorage.removeItem("order_id"); 
  } else if (paymentStatus === "failure" && storedOrderId) {
      handlePaymentFailure(storedOrderId);
      localStorage.removeItem("order_id"); 
  }
}, [location]);


  return (
    <section className="event-form-register">
      <div className="bacground-purple">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4">
              <img src={fancyicon} alt="Fancy Icon" className="fancy-icons floating" />
            </div>
            <div className="col-lg-4">
              <h1 className="heading-main" style={{ color: "white" }}>Payment Information</h1>
              <ul className="breadcrumb justify-content-center text-white align-items-center gap-1">
                <a href="/" className="nav-link">
                  <li>Home | </li>
                </a>
                <a href="/" className="nav-link" style={{ color: "white" }}>
                  <li>Checkout</li>
                </a>
              </ul>
            </div>
            <div className="col-lg-4">
              <img src={linethree} alt="Line Three" className="fancy-iconss floating" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="event-form-start">
          <h2 className="heading-form-reg">Checkout Event Form</h2>
          {message && (
            <div className={`alert ${message.includes("Successful") ? "alert-success" : "alert-danger"}`}>
              {message}
            </div>
          )}
          
          <form>
            <div className="row">
              {[
                { label: "Registration Number", field: "registrationNumber" },
                { label: "Student Name", field: "studentName" },
                { label: "Sport", field: "sport" },
                { label: "Age Group", field: "ageGroup" },
                { label: "State", field: "state" },
                { label: "City", field: "city" },
                { label: "Division", field: "division" },
                { label: "Area", field: "area" },
              ].map(({ label, field }, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="mb-4">
                    <label className="form-label">{label}</label>
                    <input className="form-control" name={field} value={formData[field]} type="text" readOnly />
                  </div>
                </div>
              ))}
              <div className="col-lg-4">
                <div className="mb-4">
                  <label className="form-label">Amount</label>
                  <input
                    className="form-control"
                    name="amount"
                    value={formData.amount}
                    onChange={(e) => setFormData((prev) => ({ 
                      ...prev, 
                      amount: Number(e.target.value) || 0 
                    }))}
                    type="number"
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  id="termsAndConditions"
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor="termsAndConditions">
                  I accept the <a href="/Terms-conditions">Terms and Conditions</a>.
                </label>
              </div>
              {checkboxError && <p style={{ color: "red" }}>You must accept the Terms and Conditions.</p>}
            </div>
          </form>
          <div className="button-pay text-center">
            <button type="button" className="btn btn-primary" onClick={handlePayment}>
              Make Payment
              <span className="img-right-arrow">
                <img src={rightarrows} alt="Right Arrows" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eventform;

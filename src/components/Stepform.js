import React, { useState , useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import fancyicon from "../assets/images/fancyicon.png";
import linethree from "../assets/images/linethree.png";
import rightarrows from "../assets/images/rightarrows.png";
import leftarrows from "../assets/images/leftarrows.png";
import listdot from "../assets/images/listdot.png";
import { useNavigate } from "react-router-dom";


function Stepform() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    middle_name: "",
    last_name: "",
    date: "",
    gender: "",
    grade_level: "",
    address: "",
    city: "",
    state_province: "",
    zip_code: "",
    school: "",
    nationality: "",
    languages: "",
    adhar_number: "",
    adhar_front: null,
    adhar_back: null,
    guardian_fullname: "",
    relation_to_student: "",
    phone_number: "",
    email: "",
    contact_person_name: "",
    mobile_number: "",
    alt_contact: "",
    known_medical_condition: "",
    medications: "",
    doctors_name: "",
    dr_contact: "",
    insurance_info: "",
    password: "",
  });

  const [hasMedicalCondition, setHasMedicalCondition] = useState(null);
  const [showMedicalInputs, setShowMedicalInputs] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  useEffect(() => {
    if (successMessage) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    }
  }, [successMessage]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setShowErrorToast(true);
      setTimeout(() => setShowErrorToast(false), 5000);
    }
  }, [errors]);

  const handleNextStep = () => {
    if (currentStep === 3 && hasMedicalCondition === null) {
      setCurrentStep(4);
      return;
    }
    if (currentStep === 4 && hasMedicalCondition === false) {
      setCurrentStep(5);
      return;
    }
    if (currentStep === 4 && hasMedicalCondition === true && !showMedicalInputs) {
      setShowMedicalInputs(true);
      return;
    }
    if (currentStep === 4 && showMedicalInputs) {
      setCurrentStep(5);
    } else {
      setCurrentStep((prevStep) => (prevStep < 4 ? prevStep + 1 : prevStep));
    }
  };

  const handlePrevStep = () => {
    if (currentStep === 5 && hasMedicalCondition === false) {
      setCurrentStep(4);
    } else if (currentStep === 5 && hasMedicalCondition === true) {
      setShowMedicalInputs(false);
      setCurrentStep(4);
    } else {
      setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
  
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value, 
    }));
  };
  

  const handleRegister = async () => {
    const apiUrl = "https://mitdevelop.com/kidsadmin/api/create-user";
    const form = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: form,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage("Registration Successful!");
        setErrors({});
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        if (result.errors) {
          setErrors(result.errors);
          setSuccessMessage("");
        } else {
          setErrors({ general: result.message || "Something went wrong!" });
          setSuccessMessage("");
        }
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setErrors({ general: "An error occurred. Please try again." });
      setSuccessMessage("");
    }
  };


  
  return (
    <section className="register-form-steps">
      <div className="bacground-purple">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img src={fancyicon} alt="" className="fancy-icons floating" />
            </div>
            <div className="col-lg-4">
              <h1 className="heading-main text-center">Registration</h1>
              <ul className="breadcrumb justify-content-center text-white align-items-center gap-1">
                <a href="/" className="nav-link">
                  <li>Home | </li>
                </a>
                <a href="/" className="nav-link" style={{ color: "#ffb06c" }}>
                  <li>Registration</li>
                </a>
              </ul>
            </div>
            <div className="col-lg-4">
              <img src={linethree} alt="" className="fancy-iconss floating" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-5">
{/* Toast Container */}
<div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1050 }}>
        {/* Success Toast */}
        {showToast && (
          <div className="toast show align-items-center text-bg-success border-0" role="alert">
            <div className="d-flex">
              <div className="toast-body">{successMessage}</div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                onClick={() => setShowToast(false)}
                aria-label="Close"
              ></button>
            </div>
          </div>
        )}

        {/* Error Toast */}
        {showErrorToast && (
          <div className="toast show align-items-center text-bg-danger border-0" role="alert">
            <div className="d-flex">
              <div className="toast-body">
                <ul>
                  {Object.entries(errors).map(([field, messages]) => (
                    <li key={field}>
                      <strong>{field}:</strong> {Array.isArray(messages) ? messages.join(", ") : messages}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                onClick={() => setShowErrorToast(false)}
                aria-label="Close"
              ></button>
            </div>
          </div>
        )}
      </div>

      {/* Step Form */}
        <div className="box-step-form">
          <div className="step-indicator">
            <div className={`step ${currentStep === 1 ? "active" : ""}`}>
              1. Student Information
            </div>
            <div className={`step ${currentStep === 2 ? "active" : ""}`}>
              2. Parent/Guardian Information
            </div>
            <div className={`step ${currentStep === 3 ? "active" : ""}`}>
              3. Emergency Contact Information
            </div>
            <div className={`step ${currentStep === 4 ? "active" : ""}`}>
              4. Medical Information
            </div>
          </div>

          <form id="stepForm" className="stepform-fill">
            {/* Step 1: Student Information */}
            {currentStep === 1 && (
              <div className="form-step">
                <div className="row">
                  <div className="col-lg-4 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Middle Name"
                      name="middle_name"
                      value={formData.middle_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-4 mb-4">
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-4">
                    <select
                      className="form-select"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                  </div>
                     <div className="col-lg-4">
                    <select
                      className="form-select"
                      name="grade_level"
                      value={formData.grade_level}
                      onChange={handleChange}
                    >
                      <option value="">Select Grade Level</option>
                      {Array.from({ length: 12 }, (_, index) => index + 1).map((grade) => (
                        <option key={grade} value={grade}>
                          Grade {grade}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Additional Address and School Info */}
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="Streetaddress"
                      placeholder="Street Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-2">
                    <input
                      type="text"
                      className="form-control"
                      id="City"
                      placeholder="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-2">
                    <input
                      type="text"
                      className="form-control"
                      id="Stateprovince"
                      placeholder="State/Province"
                      name="state_province"
                      value={formData.state_province}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-2">
                    <input
                      type="text"
                      className="form-control"
                      id="Zipcode"
                      placeholder="Zip/Postal Code"
                      name="zip_code"
                      value={formData.zip_code}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-4 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="School"
                      placeholder="School"
                      name="school"
                      value={formData.school}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      className="form-control"
                      id="Nationality"
                      placeholder="Nationality"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      className="form-control"
                      id="Language"
                      placeholder="Known Languages"
                      name="languages"
                      value={formData.languages}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="firstName" className="form-label">
                      <span className="color-dot">
                        <img
                          src={listdot}
                          alt=""
                          className="list-dot list-dot-two"
                        />
                      </span>{" "}
                      Aadhar Number
                    </label>
                    <input
                      type="text"
                      name="adhar_number"
                      value={formData.adhar_number}
                      onChange={handleChange}
                      onInput={(e) => {
                        let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                        value = value.substring(0, 12); // Limit to 12 digits
                        e.target.value = value
                          .replace(/(\d{4})(\d{4})?(\d{4})?/, (match, p1, p2, p3) => {
                            return [p1, p2, p3].filter(Boolean).join("-");
                          });
                      }}
                      className="form-control"
                      id="Adharcard"
                      placeholder="XXXX-XXXX-XXXX"
                      maxLength="14" // 12 digits + 2 hyphens
                    />

                  </div>
                  <div className="col-lg-4">
                    <label className="form-label">
                      <span className="color-dot">
                        <img
                          src={listdot}
                          alt=""
                          className="list-dot list-dot-two"
                        />
                      </span>{" "}
                      Aadhar Card Front
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      name="adhar_front"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-4 mb-4">
                    <label className="form-label">
                      <span className="color-dot">
                        <img
                          src={listdot}
                          alt=""
                          className="list-dot list-dot-two"
                        />
                      </span>{" "}
                      Aadhar Card Back
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      name="adhar_back"
                      onChange={handleChange}
                    />
                  </div>
                </div>
           
              </div>
            )}

            {/* Step 2: Parent/Guardian Information */}
            {currentStep === 2 && (
              <div className="form-step">
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Guardian's Full Name"
                      name="guardian_fullname"
                      value={formData.guardian_fullname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Relation to Student"
                      name="relation_to_student"
                      value={formData.relation_to_student}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="row">
                  <div className="col-lg-6 mt-4">
                    <input
                      type="password"
                      className="form-control"
                      id="Password"
                      placeholder="User password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                </div>
              </div>
            )}

            {/* Step 3: Emergency Contact Information */}
            {currentStep === 3 && (
              <div className="form-step">
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Emergency Contact Person"
                      name="contact_person_name"
                      value={formData.contact_person_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile Number"
                      name="mobile_number"
                      value={formData.mobile_number}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Alternate Contact"
                      name="alt_contact"
                      value={formData.alt_contact}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Medical Information */}
            {currentStep === 4 && (
            <div className="form-step">
              {hasMedicalCondition === null && ( // Show Yes/No checkbox only if it's null
                <div className="row">
                  <div className="col-lg-12 mb-4">
                    <p>Do you have any medical conditions?</p>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="medicalCondition"
                        id="medicalConditionYes"
                        value="yes"
                        onChange={() => {
                          setHasMedicalCondition(true);
                          setShowMedicalInputs(true);
                        }}
                      />
                    <label className="form-check-label" htmlFor="medicalConditionYes">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="medicalCondition"
                      id="medicalConditionNo"
                      value="no"
                      onChange={() => {
                        setHasMedicalCondition(false);
                        setShowMedicalInputs(false);
                        setCurrentStep(5);
                      }}
                    />
                    <label className="form-check-label" htmlFor="medicalConditionNo">
                      No
                    </label>
                  </div>
                </div>
              </div>
            )}

          {hasMedicalCondition === true && showMedicalInputs && (
            <div className="row">
              <div className="col-lg-6 mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Known Medical Conditions"
                  name="known_medical_condition"
                  value={formData.known_medical_condition}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Medications"
                  name="medications"
                  value={formData.medications}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6 mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Doctor's Name"
                  name="doctors_name"
                  value={formData.doctors_name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Doctor's Contact"
                  name="dr_contact"
                  value={formData.dr_contact}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Insurance Information"
                  name="insurance_info"
                  value={formData.insurance_info}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
        </div>
      )}

          </form>

          {/* Navigation Buttons */}
          <div className="d-flex justify-content-end gap-3 next-previous-button">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handlePrevStep}
              disabled={currentStep === 1}
            >
              <span className="img-right-arrow img-right-arrows">
                <img src={leftarrows} alt="" />
              </span>{" "}
              Previous
            </button>
            <button
            type="button"
            className="btn btn-primary"
            onClick={currentStep === 5 || (currentStep === 4 && hasMedicalCondition) ? handleRegister : handleNextStep}
          >
            {currentStep === 5 || (currentStep === 4 && hasMedicalCondition) ? "Register" : `Step ${currentStep + 1}`}
            <span className="img-right-arrow">
              <img src={rightarrows} alt="" />
            </span>
          </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Stepform;

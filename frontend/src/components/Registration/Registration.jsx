import React, { useState } from 'react';
import './Registration.css';
import { assets } from '../../assets/assets';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Registration = () => {
  const initialFormData = {
    fullName: '',
    schoolName: '',
    grade: '',
    zone: '',
    facultyName: '',
    mobileNumber: '',
    alternateMobileNumber: '',
    email: '',
    gender: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const getZoneOptions = (grade) => {
    switch (grade) {
      case '4th':
      case '5th':
        return ['Zone 1A', 'Zone 1B'];
      case '6th':
      case '7th':
      case '8th':
        return ['Zone 2A', 'Zone 2B'];
      case '9th':
      case '10th':
      case '11th':
      case '12th':
        return ['Zone 3'];
      default:
        return [];
    }
  };

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          error = 'Full Name is required';
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
          error = 'Full Name can only contain letters and spaces';
        }
        break;
      case 'schoolName':
        if (!value.trim()) {
          error = 'School Name is required';
        }
        break;
      case 'grade':
        if (!value) {
          error = 'Please select a grade';
        }
        break;
      case 'zone':
        if (!value) {
          error = 'Please select a zone';
        }
        break;
      case 'facultyName':
        if (value && !/^[A-Za-z\s]+$/.test(value)) {
          error = 'Faculty Name can only contain letters and spaces';
        }
        break;
      case 'mobileNumber':
        if (!value.trim()) {
          error = 'Mobile Number is required';
        } else if (!/^\d{10}$/.test(value)) {
          error = 'Mobile Number must be 10 digits';
        }
        break;
      case 'alternateMobileNumber':
        if (value && !/^\d{10}$/.test(value)) {
          error = 'Alternate Mobile Number must be 10 digits';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Email is invalid';
        }
        break;
      case 'gender':
        if (!value) {
          error = 'Please select a gender';
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === 'mobileNumber' || name === 'alternateMobileNumber') {
      updatedValue = value.replace(/\D/g, ''); // Remove non-digit characters
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));

    const error = validateField(name, updatedValue);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    // Clear zone selection if grade changes
    if (name === 'grade') {
      setFormData((prevData) => ({ ...prevData, grade: value, zone: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear all errors before re-validating
    setErrors({});

    // Validate the form
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:4000/api/registrations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Form Data Submitted:', data);
          // Clear the form data after successful submission
          setFormData(initialFormData);

          // Show success notification
          toast.success('Successfully Registered!');
        } else {
          console.error('Error submitting form:', response.statusText);
          setErrors((prevErrors) => ({
            ...prevErrors,
            submission: 'There was an error submitting the form. Please try again.',
          }));
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors((prevErrors) => ({
          ...prevErrors,
          submission: 'There was an error submitting the form. Please try again.',
        }));
      }
    }
  };

  const zoneOptions = getZoneOptions(formData.grade);

  return (
    <div className="containerr">
      <div className="image-containerr">
        <img src={assets.Logo} alt="Logo" />
        <img src={assets.Cybertron_poster} alt="Poster" />
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>
        <div>
          <label>School Name:</label>
          <input
            type="text"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
          />
          {errors.schoolName && <span className="error">{errors.schoolName}</span>}
        </div>
        <div>
          <label>Grade:</label>
          <select
            name="grade"
            value={formData.grade}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
            <option value="6th">6th</option>
            <option value="7th">7th</option>
            <option value="8th">8th</option>
            <option value="9th">9th</option>
            <option value="10th">10th</option>
            <option value="11th">11th</option>
            <option value="12th">12th</option>
          </select>
          {errors.grade && <span className="error">{errors.grade}</span>}
        </div>
        <div>
          <label>Zone:</label>
          <select
            name="zone"
            value={formData.zone}
            onChange={handleChange}
            disabled={!zoneOptions.length}
          >
            <option value="">Select</option>
            {zoneOptions.map((zone, index) => (
              <option key={index} value={zone}>
                {zone}
              </option>
            ))}
          </select>
          {errors.zone && <span className="error">{errors.zone}</span>}
        </div>
        <div>
          <label>Faculty Name (optional):</label>
          <input
            type="text"
            name="facultyName"
            value={formData.facultyName}
            onChange={handleChange}
          />
          {errors.facultyName && <span className="error">{errors.facultyName}</span>}
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
          {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
        </div>
        <div>
          <label>Alternate Mobile Number:</label>
          <input
            type="tel"
            name="alternateMobileNumber"
            value={formData.alternateMobileNumber}
            onChange={handleChange}
          />
          {errors.alternateMobileNumber && <span className="error">{errors.alternateMobileNumber}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>
        <div>
          <button className='submitr' type="submit">Submit</button>
        </div>
        {errors.submission && <p className="error">{errors.submission}</p>}
      </form>
      <ToastContainer /> {/* Add ToastContainer */}
    </div>
  );
};

export default Registration;




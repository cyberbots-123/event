import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './KitRegistration.css';
import { assets } from '../../assets/assets';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

const KitRegistration = () => {
  const location = useLocation();
  const { productName, price } = location.state || {};

  const [formData, setFormData] = useState({
    fullName: '',
    schoolName: '',
    grade: '',
    mobileNumber: '',
    alternateMobileNumber: '',
    email: '',
    address: '',
    landmark: '',
    productName: productName || '',
    price: price || ''
  });

  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    const newErrors = { ...errors };
    switch (name) {
      case 'fullName':
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!value.trim()) {
          newErrors.fullName = 'Full Name is required.';
        } else if (!nameRegex.test(value)) {
          newErrors.fullName = 'Full Name can only contain letters and spaces.';
        } else {
          newErrors.fullName = '';
        }
        break;
      case 'schoolName':
        newErrors.schoolName = !value.trim() ? 'School Name is required.' : '';
        break;
      case 'grade':
        newErrors.grade = !value ? 'Grade is required.' : '';
        break;
      case 'mobileNumber':
        const mobileRegex = /^[0-9]{10}$/;
        if (!value.trim()) {
          newErrors.mobileNumber = 'Mobile Number is required.';
        } else if (!mobileRegex.test(value)) {
          newErrors.mobileNumber = 'Mobile Number must be 10 digits.';
        } else {
          newErrors.mobileNumber = '';
        }
        break;
      case 'alternateMobileNumber':
        if (value && !/^[0-9]{10}$/.test(value)) {
          newErrors.alternateMobileNumber = 'Alternate Mobile Number must be 10 digits.';
        } else {
          newErrors.alternateMobileNumber = '';
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = 'Email ID is required.';
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'Email ID is not valid.';
        } else {
          newErrors.email = '';
        }
        break;
      case 'address':
        newErrors.address = !value.trim() ? 'Address for Communication is required.' : '';
        break;
      case 'productName':
        newErrors.productName = !value.trim() ? 'Product Name is required.' : '';
        break;
      case 'price':
        if (!value) {
          newErrors.price = 'Price is required.';
        } else if (parseFloat(value.replace(/[^\d.-]/g, '')) <= 0) {
          newErrors.price = 'Price must be greater than zero.';
        } else {
          newErrors.price = '';
        }
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(name, value);
  };

  const validateAll = () => {
    Object.keys(formData).forEach((field) => validate(field, formData[field]));
    return Object.values(errors).every((error) => !error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateAll()) {
      const priceValue = formData.price.replace(/[^\d.-]/g, ''); // Remove non-numeric characters
      console.log('Submitting form data:', { ...formData, price: priceValue }); // Log form data
      try {
        const response = await fetch('http://localhost:4000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...formData, price: priceValue }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Success:', data);
          toast.success("Your order has been successfully placed!"); // Show success notification
          // Optionally, reset the form or redirect
          setFormData({
            fullName: '',
            schoolName: '',
            grade: '',
            mobileNumber: '',
            alternateMobileNumber: '',
            email: '',
            address: '',
            landmark: '',
            productName: productName || '',
            price: price || ''
          });
        } else {
          const errorData = await response.json(); // Assuming your API sends a JSON error response
          console.error('Error:', errorData); // Log the error details
          alert('Failed to submit form. Please try again. ' + errorData.message);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <>
      <div className="form-container">
        <div className="images">
          <img src={assets.Logo} alt="Logo" />
          <img src={assets.Cybertron_poster} alt="Cybertron Poster" />
        </div>
        <div className="form-area">
          <h2>Kit Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              {errors.fullName && <span className="error">{errors.fullName}</span>}
            </div>
            <div className="form-group">
              <label>School Name:</label>
              <input
                type="text"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                required
              />
              {errors.schoolName && <span className="error">{errors.schoolName}</span>}
            </div>
            <div className="form-group">
              <label>Grade:</label>
              <select
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                required
              >
                <option value="">Select Grade</option>
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
            <div className="form-group">
              <label>Mobile Number:</label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
              {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
            </div>
            <div className="form-group">
              <label>Alternate Mobile Number:</label>
              <input
                type="tel"
                name="alternateMobileNumber"
                value={formData.alternateMobileNumber}
                onChange={handleChange}
              />
              {errors.alternateMobileNumber && <span className="error">{errors.alternateMobileNumber}</span>}
            </div>
            <div className="form-group">
              <label>Email ID:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label>Address for Communication:</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              {errors.address && <span className="error">{errors.address}</span>}
            </div>
            <div className="form-group">
              <label>Nearby Landmark:</label>
              <input
                type="text"
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Product Name:</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                required
                disabled
              />
              {errors.productName && <span className="error">{errors.productName}</span>}
            </div>
            <div className="form-group">
              <label>Price:</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                
              />
              {errors.price && <span className="error">{errors.price}</span>}
            </div>
            <button type="submit" className='submitk'>Register</button>
          </form>
        </div>
      </div>
      <ToastContainer /> {/* Add ToastContainer to render notifications */}
    </>
  );
};

export default KitRegistration;

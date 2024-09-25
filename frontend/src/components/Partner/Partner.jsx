import React from 'react';
import './Partner.css';
import { assets } from '../../assets/assets';

const Partner = () => {
  return (
    <div className="partner-container">
      <p className="partner-text">Our Associate Partner</p>
      <img src={assets.Partner} alt="Partners_logo" className="partner-image" />
    </div>
  );
};

export default Partner;

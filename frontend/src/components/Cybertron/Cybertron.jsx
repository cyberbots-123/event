import React from 'react';
import './Cybertron.css';
import { assets } from '../../assets/assets';
import { GiFeather } from 'react-icons/gi';

const Cybertron = () => {
  return (
    <>
      <div id="cybertron" className="cybertrons">
        <div className="cybertron">
          <img className='abt_img' src={assets.Cyb1} alt="About_Cybertron" />
          <div className="content">
            <h2>WHAT IS SV-CYBERTRON ?</h2>
            <p><GiFeather /> SV-CYBERTRON is a dynamic event that brings together young innovators to compete in a variety of robotics challenges, fostering creativity and technical skills.</p>
            <p><GiFeather /> Participants enhance their programming, engineering, and problem-solving abilities through engaging and interactive competitions.</p>
            <p><GiFeather /> The event encourages teamwork and communication among students, allowing them to work together and learn from each other.</p>
            <p><GiFeather /> SV-CYBERTRON provides a platform for students to apply their robotics knowledge to real-world scenarios, simulating practical challenges and solutions.</p>
            <p><GiFeather /> Students receive recognition for their efforts through awards and cash prizes, motivating them to excel and innovate in the field of robotics.</p>
          </div>
        </div>
        <div className='Cyb_img'>
          <img className='abt_img_1' src={assets.Cyb2} alt="About_Cybertron" />
          <img className='abt_img_2' src={assets.Cyb3} alt="About_Cybertron" />
        </div>
      </div>
    </>
  );
};

export default Cybertron;

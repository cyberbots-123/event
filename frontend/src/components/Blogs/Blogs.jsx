import React from 'react';
import './Blogs.css';
import { assets } from '../../assets/assets';

const Blogs = () => {
  const blogContent = [
    {
      image: assets.Blog1,
      title: "Cyberfest 2023",
      description: "CYBERFEST 2023, held on November 25th at Maharishi Vidhya Mandir, showcased young talent in robotics through exciting events like CYBERCALCIO, CYBERBHAARAT, and the CYBERVERSE science expo. Students impressed with their creativity, engineering skills, and teamwork, making the event a resounding success and celebrating the future of innovation."
    },
    {
      image: assets.Blog2,
      title: "CyberMania 2024",
      description: "CyberMania 2K24, held on February 10, 2024, at Vaels International School, Chennai, brought together students from Grades 4 to 8 to compete in robotics events like CYBER PLANT, CYBER CALCIO, and CYBER BHAARATH. Organized by CyberBots, the event also featured a Tech Expo and expert talks, providing an inspiring platform for young robotics enthusiasts."
    },
    {
      image: assets.Blog3,
      title: "Robotics Expo",
      description: "On March 9, 2024, Aachi Global School hosted a vibrant Robotics Expo featuring over 50 innovative projects. The event showcased the creativity and technical skills of students, highlighting their impressive work in robotics and technology. The expo provided an inspiring platform for young minds to share their ideas and innovations with peers and educators."
    }
  ];

  return (
    <div id='blogs'>
    <div className="blogs-container">
      {blogContent.map((blog, index) => (
        <div key={index} className="blog-card">
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <div className="blog-content">
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-description">{blog.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Blogs;

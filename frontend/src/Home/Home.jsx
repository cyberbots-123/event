import React from 'react'
import "./Home.css"
import Navbar from '../components/Navbar/Navbar'
import Timer from '../components/CountdownTimer/CountdownTimer'
import Cybertron from '../components/Cybertron/Cybertron'
import Event from '../components/Event/Event'
import Event2 from '../components/Event2/Event2'
import Event3 from '../components/Event3/Event3'
import Footer from "../components/Footer/Footer"
import Blogs from '../components/Blogs/Blogs'
import Partner from '../components/Partner/Partner'





const Home = () => {

  const registrationStartDate = '2024-09-26T18:00:00';
  const registrationEndDate = '2025-01-10T18:00:00';
  return (
    <>
    <Navbar/>
    <Timer startDate={registrationStartDate} endDate={registrationEndDate} />
    <Cybertron/>
    <Event/>
    <Event2/>
    <Event3/>
    <Blogs/>
    <Partner/>
    <Footer/>
    </>
  )
}

export default Home

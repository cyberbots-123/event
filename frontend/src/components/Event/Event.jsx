import React from 'react';
import './Event.css';
import { FaFileDownload } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { assets  } from '../../assets/assets';



const Event = () => {

    const navigate = useNavigate();

    const handleShopClick = (zone) => {
        navigate(`/product-details/${zone}`);
    }

    return (
        <div id='events'>
        <div className="container">
            <div className="header">
                <h2 className='cat-1'>CATEGORY :- 1</h2>
                <h4 className='grd-1'>GRADE : 4-5</h4>
            </div>
            <div className='content-container'>
                <div className='content-1'>
                    <h4>Zone 1A - Cosmic Odyssey</h4>
                    <h4>A Maze Navigation and Repair Challenge</h4>
                    <h4>TEAM SIZE:- Individual Participation</h4>
                    <h4>HARDWARE:- Bee Bot</h4>
                    <h4>Characteristics:-</h4>
                    <p>Students control Bee bots through a space-themed maze to complete repairs on a space station. Each player is assigned a unique path and must avoid asteroids, complete a buzz game at the docking point, and navigate to the repair area.</p>
                    <h4>EVENT DETAILS:-</h4>
                    <p className='text'><b>Objective:</b> Guide the robot through the maze, avoid obstacles, and complete repairs.</p>
                    <p className='text'><b>Challenge:</b> Accurate path navigation, asteroid avoidance, buzz game completion, and successful repair within the time limit.</p>
                    <p className='text'><b>Scoring:</b> Points are awarded based on navigation accuracy, asteroid avoidance, docking, and repair completion</p>
                    <a href={assets.Zone_1A} download><button className='download_btn'>For more details<FaFileDownload /></button></a>
                    <FaCartShopping className="fa-shop" onClick={() => handleShopClick('Zone_1A')} />

                </div>
                <div className='content-2'>
                    <h4>Zone 1B - Quantum Assault</h4>
                    <h4>A Laser Combat and Strategy Challenge</h4>
                    <h4>TEAM SIZE:- 2 students per team</h4>
                    <h4>HARDWARE:- DIY laser shooters, vests with LDRs (light-dependent resistors)</h4>
                    <h4>Characteristics:-</h4>
                    <p className='text'>Teams compete in a laser game where they use DIY laser shooters and vests with LDRs to hit opponents and avoid being hit. The game involves strategic movement and teamwork.</p>
                    <h4>EVENT DETAILS:-</h4>
                    <p  className='text'><b>Objective:</b> Use laser to strike the opponent while preventing yourself from struck.</p>
                    <p className='text'><b>Challenge:</b> Accuracy with laser shooters, strategic movement, and effective use of cover within the time limit.</p>
                    <p className='text'><b>Scoring:</b> Points are awarded on successful hits, avoidance, and overall team performance.</p>
                    <br />
                    <br />
                    <a href={assets.Zone_1B} download><button className='download_btn'>For more details<FaFileDownload /></button></a>
                    <FaCartShopping className="fa-shop" onClick={() => handleShopClick('Zone_1B')} />


                </div>
            </div>
        </div>
        </div>
    );
};

export default Event;

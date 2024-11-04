import React from 'react';
import './Event.css';
import { FaFileDownload } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaFileVideo } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

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
                        <h4>Zone 1 - Cosmic Odyssey</h4>
                        <h4>A Maze Navigation and Repair Challenge</h4>
                        <h4>TEAM SIZE:- Individual Participation</h4>
                        <h4>HARDWARE:- Bee Bot</h4>
                        <h4>Characteristics:-</h4>
                        <p>Students control Bee bots through a space-themed maze to complete repairs on a space station. Each player is assigned a unique path and must avoid asteroids, complete a buzz game at the docking point, and navigate to the repair area.</p>
                        <h4>EVENT DETAILS:-</h4>
                        <p className='text'><b>Objective:</b> Guide the robot through the maze, avoid obstacles, and complete repairs.</p>
                        <p className='text'><b>Challenge:</b> Accurate path navigation, asteroid avoidance, buzz game completion, and successful repair within the time limit.</p>
                        <p className='text'><b>Scoring:</b> Points are awarded based on navigation accuracy, asteroid avoidance, docking, and repair completion</p>
                        <div className='icons_'>
                            <a href={assets.Zone_1A} download><button className='download_btn'>More details<FaFileDownload /></button></a>
                            <a href="https://mega.nz/file/nyIkkKJS#28e1UMNDXvH8VLeLDSobvvRkOnb5DWAjuHETDAxTrXc" target='_blank'><button className='download_btn'>Robot Build Video<FaFileVideo /></button></a>
                            <a href="https://mega.nz/file/D6ZVgaTI#HLcjPFeLILOs7jYyErBqI3JgFA7Nr5LncLgYQbnFgyA" target='_blank'><button className='download_btn'>Operation Video<FaFileVideo /></button></a>
                            <FaCartShopping className="fa-shop" onClick={() => handleShopClick('Zone_1A')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;

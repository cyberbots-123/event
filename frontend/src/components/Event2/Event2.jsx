import React from 'react';
import './Event2.css';
import { FaFileDownload } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { FaFileVideo } from "react-icons/fa6";
import { assets } from '../../assets/assets';

const Event = () => {
    const navigate = useNavigate();

    const handleShopClick = (zone) => {
        navigate(`/product-details/${zone}`);
    };

    return (
        <div id='events'>
            <div className="container_1">
                <div className="header_1">
                    <h2 className='cat-1'>CATEGORY :- 2</h2>
                    <h4 className='grd-2'>GRADE: 6-8</h4>
                </div>
                <div className='content-container_1'>
                    <div className='content-1'>
                        <h4>Zone 2A Knight’s Quest</h4>
                        <h4>A Medieval-Themed Ball Collection Challenge</h4>
                        <h4>TEAM SIZE:- Individual Participation</h4>
                        <h4>HARDWARE:- Bluetooth controlled robots.</h4>
                        <h4>Characteristics:-</h4>
                        <p>Students program robots to collect colored balls while navigating through obstacles in a medieval-themed battlefield.</p>
                        <h4>EVENT DETAILS:-</h4>
                        <p><b>Objective:</b> Collect colored balls efficiently.</p>
                        <p><b>Challenge:</b> Precision in ball collection, sorting accuracy, and obstacle navigation within the time limit.</p>
                        <p><b>Scoring:</b> Points are awarded based on the number of balls collected.</p>
                        <br />
                        <br />
                        <div className='icons_'>
                            <a href={assets.Zone_2A} download><button className='download_btn_1'>More details<FaFileDownload /></button></a>
                            <a href="https://mega.nz/file/GqxXyYaL#W3i41eit0xQckszQCPcCuoXyJrFduerGLMo7vvIAttk" target='_blank'><button className='download_btn'>Robot Build Video<FaFileVideo /></button></a>
                            <a href="https://mega.nz/file/v7whiQwZ#jU5W4xWQPNZnJoB0I7-phm9TFXPje94fSYrbHMsVk-8" target='_blank'><button className='download_btn'>Operation Video<FaFileVideo /></button></a>
                            <FaCartShopping className="fa-shop" onClick={() => handleShopClick('Zone_2A')} />
                        </div>
                    </div>
                    <div className='content-2'>
                        <h4>Zone 2B - Torchbearer's Quest</h4>
                        <h4>A Relay Race with Bluetooth Controlled Robots</h4>
                        <h4>TEAM SIZE:- 2 students per team</h4>
                        <h4>HARDWARE:- Bluetooth controlled robots.</h4>
                        <h4>Characteristics:-</h4>
                        <p>Teams navigate Bluetooth controlled robots through a dynamic relay course with obstacles including mist and ramps. Precision in relay handoffs and obstacle navigation is key.</p>
                        <h4>EVENT DETAILS:-</h4>
                        <p><b>Objective:</b> Navigate robots through obstacles, complete relay handoffs, and light up the torch.</p>
                        <p><b>Challenge:</b> Accurate navigation, smooth relay transitions, and obstacle management within the time limit.</p>
                        <p><b>Scoring:</b> Points are awarded for navigation, obstacle avoidance, relay completion, and in-time performance.</p>
                        <br />
                        <div className='icons_'>
                            <a href={assets.Zone_2B} download><button className='download_btn_1'>More details<FaFileDownload /></button></a>
                            <a href="https://mega.nz/file/CjZh1KbI#aKOPzqgJWk5eZ3fxLeLxptggxAM8yVRFENol1eadAjE" target='_blank'><button className='download_btn'>Robot Build Video<FaFileVideo /></button></a>
                            <a href="https://mega.nz/file/7ih1wDiR#gOWPoOqQeros3jJPSCHTS4yUIEEHJSszxDJakrD2Q10" target='_blank'><button className='download_btn'>Operation Video<FaFileVideo /></button></a>
                            <FaCartShopping className="fa-shop" onClick={() => handleShopClick('Zone_2B')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;

import React from 'react';
import './Event3.css';
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
        <div className="container">
            <div className="header_2">
                <h2 className='cat-1'>CATEGORY :-3</h2>
                <h4 className='grd-3'>GRADE: 9-12</h4>
            </div>
            <div className='content-container'>
                <div className='content-1'>
                    <h4>Zone 3 Drone Obstacle Course</h4>
                    <h4>A Drone Navigation Challenge</h4>
                    <h4>TEAM SIZE:- Individual Participation</h4>
                    <h4>HARDWARE:-  Drones (specific model as per event rules)</h4>
                    <h4>Characteristics:-</h4>
                    <p>Participants pilot drones through a challenging obstacle course, testing their flying skills, control precision, and navigation abilities. The course includes various obstacles designed to challenge the participant's drone handling and problem-solving skills. In the Drone Obstacle Course, participants must pilot their drones through a series of obstacles, including hoops, barriers, and tight turns. The course is designed to test both the speed and accuracy of the drone's flight. Effective programming and fine-tuned control are crucial for success.
                    </p>
                    <h4>EVENT DETAILS:-</h4>
                    <p><b>Objective:</b> Navigate drones through various obstacles with precision.</p>
                    <p><b>Challenge:</b> Control accuracy, obstacle avoidance, and overall flying skill within the time limit.</p>
                    <p><b>Scoring:</b> Points are awarded based on navigation speed, accuracy, obstacle handling.</p>
                    <br/>
                    {/* <br/> */}
                    <div className='icons_'>
                    <a href={assets.Zone_3} download><button className='download_btn_2'>More details<FaFileDownload /></button></a>
                    <a href="https://mega.nz/file/y3xlECxT#pE_vGpGjY8Byx2uP4HWnYjoEb8P5RzVvv2I6kZdrDWE" target='_blank'><button className='download_btn'>Robot Build Video<FaFileVideo /></button></a>
                    <a href="https://mega.nz/file/27oywC7J#p8r_Hk1HGE-CHNXMz7llj0L_1MPA1WU6BqUZnomROK0" target='_blank'><button className='download_btn'>Operation Video<FaFileVideo /></button></a>
                    <FaCartShopping className="fa-shop" onClick={() => handleShopClick('Zone_3')} />
                    </div>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default Event;

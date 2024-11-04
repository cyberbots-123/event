import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { zones } from '../../assets/assets'; // Adjust the path as necessary

const kits = {
    Zone_1A: {
        title: 'Zone-1A Bee Bot Kit',
        description: 'The Bee Bot is an interactive educational robot designed for young learners to follow commands using four push buttons: Forward, Left, Right, and Go. By pressing the Forward button, the Bee Bot moves one step ahead; the Left and Right buttons rotate it 90 degrees in the respective direction. Once a sequence of commands is input, the Go button executes the stored directions, allowing the Bee Bot to follow the path accordingly.',
        components: [
            '2S Battery Holder x1',
            'Li-ion Battery x2',
            'Command Board x1',
            'Three Wheel Chassis Set',
            'User Manual'
        ],
        price: '₹ 1219',
        images: zones.Zone_1A_Images,
        makingVideo: 'https://www.mediafire.com/folder/8a4w0kod8mtnz/Zone_1A',
        formLink: 'https://forms.gle/RxYJ8BhoYLvivXQU7',
    },
    Zone_1B: {
        title: 'Zone 1B - Quantum Assault Kit',
        description: 'Quantum Assault is an action-packed laser gun game that combines cutting-edge technology with wearable gear, where players wear a specially designed T-shirt equipped with sensors and hold a laser gun to engage in thrilling battles.',
        components: [
            'LDR (20mm) x3',
            'Controller Board x1',
            'HW Battery x4',
            'HW Battery Snap x1',
            'Foam Sheet Pieces x4',
            'Double-Sided Tape x1',
            'Limit Switch x1',
            'Resistor (220 Ω) x1',
            'Laser Diode x1',
            'T-Shirt x1',
            'User Manual'
        ],
        price: '₹ 1599',
        images: zones.Zone_1B_Images,
        makingVideo: 'https://www.mediafire.com/folder/ktp58he7c7vhm/Zone_1B',
        formLink: 'https://forms.gle/zfMZN5eXvmS7MhCj7',
    },
    Zone_2A: {
        title: 'Zone 2A - Ball Collector Bot Kit',
        description: 'The Knight Quest Bot is an adventurous, Bluetooth-controlled robot designed to navigate through a maze and collect balls as part of its quest. Operated through a smartphone, the bot maneuvers swiftly through the maze, seeking out and retrieving scattered balls along the way.',
        components: [
            '4 Wheel Chassis Set',
            'L298N Motor Driver x1',
            '3S Battery Holder x1',
            'Jumper Wire (M-F) x6',
            'Li-ion Battery x3',
            'Double-Sided Tape x1',
            'Controller Board x1',
            'Roller Set',
            'BO Motor x1',
            '1-inch Transparent Tape x1',
            'User Manual'
        ],
        price: '₹ 1799',
        images: zones.Zone_2A_Images,
        makingVideo: 'https://www.mediafire.com/folder/e4l4mxtarol5a/Zone_2A',
        formLink: 'https://forms.gle/YS29PG9nMydPbYJRA',
    },
    Zone_2B: {
        title: 'Zone 2B - Relay Bot',
        description: 'The 4-Wheel Chassis Bot is an innovative, team-based robot designed for a relay-style game set in a maze, where two players work together to navigate and complete challenges. Controlled via Bluetooth on their phones, each player operates one of the bots.',
        components: [
            '4 Wheel Chassis Set x1',
            'L298N Motor Driver x1',
            '3S Battery Holder x1',
            'Jumper Wires (M-F) x6',
            'Li-ion Battery x3',
            'Double-Sided Tape x1',
            'Controller Board x1',
            'Limit Switch x2',
            'LED (8mm) x1',
            'Foam Sheet x2',
            'Flex Kwik x1',
            'User Manual'
        ],
        price: '₹ 1799',
        images: zones.Zone_2B_Images,
        makingVideo: 'https://www.mediafire.com/folder/70wilug41wz1w/Zone_2B',
        formLink: 'https://forms.gle/rfTzpLmSDUGbGpG4A',
    },
    Zone_3: {
        title: 'Zone 3 - Drone Obstacle Course Kit',
        description: 'The Drone Event is an exhilarating competition where participants pilot drones through challenging courses, demonstrating their precision, speed, and control. Using remote controllers or smartphones, participants guide their drones to navigate obstacles, complete tasks, and race against time.',
        components: [
            'Flight Controller x1',
            'Li-po Battery x2',
            'Brushless Motors (Red Connector) x2',
            'Brushless Motors (White Connector) x2',
            'Clockwise Propellers x2',
            'Anti-Clockwise Propellers x2',
            'Quad Crafter Frame x1',
            'Remote Controller',
            'Charging Cable',
            'User Manual'
        ],
        price: '₹ 2499',
        images: zones.Zone_3_Images,
        makingVideo: 'https://www.mediafire.com/folder/mtt29sbf10mst/Zone_3', 
        formLink: 'https://forms.gle/aox5D7SVh4GTUB2v5',
    }
};

const ProductDetails = () => {
    const { zone } = useParams();
    const kit = kits[zone];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % kit.images.length
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [kit.images.length]);

    if (!kit) {
        return <div>Kit details not available.</div>;
    }

    const handleBuyNow = () => {
        window.open(kit.formLink, '_blank');
    };

    return (
        <div className="product-details">
            <div className="product-image-slider">
                <img src={kit.images[currentImageIndex]} alt={kit.title} className="main-product-image" />
                <div className="price-and-button">
                    <h4 className="product-price">Price: {kit.price}</h4>
                    <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
                </div>
            </div>
            <div className="product-info">
                <h1>{kit.title}</h1>
                <p>{kit.description}</p>
                <h3>Included Components:</h3>
                <ul>
                    {kit.components.map((component, index) => (
                        <li key={index}>{component}</li>
                    ))}
                </ul>

                <div className="video-buttons">
                    {/* <a href={kit.makingVideo} target="_blank" rel="noopener noreferrer" className="video-btn">
                        Making and Maze
                    </a> */}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

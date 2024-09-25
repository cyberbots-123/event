import Homepage_Banner from "./Homepage_Banner.jpg"
import Logo from "./Logo.png"
import About_us from "./About_us.png"
import Cyb1 from "./Cyb1.jpg"
import Cyb2 from "./Cyb2.jpg"
import Cyb3 from "./Cyb3.jpg"
import Blog1 from "./Blog1.jpg"
import Blog2 from "./Blog2.jpg"
import Blog3 from "./Blog3.jpg"
import Partner from "./Partner.png"
import Poster1 from "./Poster1.jpg"
import Zone_1A from "./Zone_1A.pdf"
import Zone_1B from "./Zone_1B.pdf"
import Zone_2A from "./Zone_2A.pdf"
import Zone_2B from "./Zone_2B.pdf"
import Zone_3 from "./Zone_3.pdf"
import Cybertron_poster from "./Cybertron_poster.png"


import Zone1A_1 from "./Zone1A_1.jpg"
import Zone1A_2 from "./Zone1A_2.jpg"
import Zone1A_3 from "./Zone1A_3.jpg"
import Zone1A_4 from "./Zone1A_4.jpg"
import Zone1A_5 from "./Zone1A_5.jpg"

import Zone1B_1 from "./Zone1B_1.jpg"
import Zone1B_2 from "./Zone1B_2.jpg"
// import Zone1B_3 from "./Zone1B_3.jpg"

// import Zone2A_1 from "./Zone2A_1.jpg"
// import Zone2A_2 from "./Zone2A_2.jpg"
import Zone2A_3 from "./Zone2A_3.jpg"
import Zone2A_4 from "./Zone2A_4.jpg"
import Zone2A_5 from "./Zone2A_5.jpg"

import Zone2B_1 from "./Zone2B_1.jpg"
import Zone2B_2 from "./Zone2B_2.jpg"
import Zone2B_3 from "./Zone2B_3.jpg"
import Zone2B_4 from "./Zone2B_4.jpg"
import Zone2B_5 from "./Zone2B_5.jpg"

import Zone3_1 from "./Zone3_1.jpg"
import Zone3_2 from "./Zone3_2.jpg"
import Zone3_3 from "./Zone3_3.jpg"
import Zone3_4 from "./Zone3_4.jpg"
import Zone3_5 from "./Zone3_5.jpg"

export const zones ={
    Zone_1A_Images: [
        Zone1A_1,
        Zone1A_2,
        Zone1A_3,
        Zone1A_4,
        Zone1A_5
    
    ],
    Zone_1B_Images: [
        Zone1B_1,
        Zone1B_2,
    ],
    Zone_2A_Images: [
        Zone2A_3,
        Zone2A_4,
        Zone2A_5
    ],
    Zone_2B_Images: [
        Zone2B_1,
        Zone2B_2,
        Zone2B_3,
        Zone2B_4,
        Zone2B_5
    ],
    Zone_3_Images: [
        Zone3_1,
        Zone3_2,
        Zone3_3,
        Zone3_4,
        Zone3_5
    ],
}



export const kits = {
    Zone_1A: {
        title: 'Zone-1A Bee Bot Kit',
        description: 'The Bee Bot is an interactive educational robot designed for young learners to follow commands using four push buttons: Forward, Left, Right, and Go. By pressing the Forward button, the Bee Bot moves one step ahead; the Left and Right buttons rotate it 90 degrees in the respective direction. Once a sequence of commands is input, the Go button executes the stored directions, allowing the Bee Bot to follow the path accordingly. This intuitive design helps children explore basic programming and directional concepts in a fun and engaging way.',
        components: [
            'Battery holder x1',
            'Battery x2',
            'Controller Board x1',
            'Three wheel chassis Set'
        ],
        price: '₹ 1599',
        images: zones.Zone_1A_Images,
        makingVideo: 'https://www.mediafire.com/folder/8a4w0kod8mtnz/Zone_1A',
    },
    Zone_1B: {
        title: 'Zone 1B - Quantum Assault Kit',
        description: 'Quantum Assault is an action-packed laser gun game that combines cutting-edge technology with wearable gear, where players wear a specially designed T-shirt equipped with sensors and hold a laser gun to engage in thrilling battles.',
        components: [
            'LDR (Light Dependent Resistor) x3',
            'Controller Board x1',
            'HW Battery x4',
            'HW Battery Snap x2',
            'Hook-up Wire (2 meters)',
            'Foam Sheet Pieces x4',
            'Double-Sided Tape x1',
            'Limit Switch x1',
            'Resistor (220 ohms) x1',
            'Laser Diode x1',
            'T-Shirt x1'
        ],
        price: '₹ 1599',
        images: zones.Zone_1B_Images,
        makingVideo: 'https://www.mediafire.com/folder/ktp58he7c7vhm/Zone_1B',
    },
    Zone_2A: {
        title: 'Zone 2A - Relay Bot Kit',
        description: 'The 4-Wheel Chassis Bot is an innovative, team-based robot designed for a relay-style game set in a maze, where two players work together to navigate and complete challenges. Controlled via Bluetooth on their phones, each player operates one of the bots.',
        components: [
            '4 wheel Chassis Set',
            'Motor Driver x1',
            'Hook up wire (2 meters)',
            'Battery holder 3s x1',
            'Jumper wire (M-F) x6',
            'Li-ion Battery x3',
            'LED x1',
            'Double-sided tape x1',
            'Controller Board x1',
            'Foam Sheet',
            'Limit switch x2',
            '1-inch transparent tape x1'
        ],
        price: '₹ 2000',
        images: zones.Zone_2A_Images,
        makingVideo: 'https://www.mediafire.com/folder/e4l4mxtarol5a/Zone_2A',
    },
    Zone_2B: {
        title: 'Zone 2B - Ball Collector Bot Kit',
        description: 'The Knight Quest Bot is an adventurous, Bluetooth-controlled robot designed to navigate through a maze and collect balls as part of its quest. Operated through a smartphone, the bot maneuvers swiftly through the maze, seeking out and retrieving scattered balls along the way.',
        components: [
            '4 Wheel Chassis Set x1',
            'Motor Driver x1',
            'BO Motor DS x1',
            'Hook-up wire (2 meters)',
            'Battery holder 3s x1',
            'Jumper wires (M-F) x6',
            'Li-ion Battery x3',
            'Double-sided tape x1',
            'Controller Board x1',
            'Foam Sheet',
            'Flux quick x1'
        ],
        price: '₹ 2000',
        images: zones.Zone_2B_Images,
        makingVideo: 'https://www.mediafire.com/folder/70wilug41wz1w/Zone_2B',
    },
    Zone_3: {
        title: 'Zone 3 - Drone Obstacle Course Kit',
        description: 'The Drone Event is an exhilarating competition where participants pilot drones through challenging courses, demonstrating their precision, speed, and control. Using remote controllers or smartphones, participants guide their drones to navigate obstacles, complete tasks, and race against time.',
        components: [
            'Flight controller x1',
            'Battery x2',
            'Brushless Motors (red connector) x2',
            'Brushless Motors (white connector) x2',
            'Clockwise propellers x2',
            'Anti-clockwise propellers x2',
            'Quad Crafter frame x1',
            'Remote Controller',
            'Charging Cable'
        ],
        price: '₹ 2999',
        images: zones.Zone_3_Images,
        makingVideo: 'https://www.mediafire.com/folder/mtt29sbf10mst/Zone_3',
    }
};



export const assets = {
    Homepage_Banner,
    Logo,
    About_us,
    Cyb1,
    Cyb2,
    Cyb3,
    Blog1,
    Blog2,
    Blog3,
    Partner,
    Poster1,
    Zone_1A,
    Zone_1B,
    Zone_2A,
    Zone_2B,
    Zone_3,
    Cybertron_poster
}
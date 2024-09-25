// middleware/cors.js
import cors from 'cors';

const corsOptions = {
    origin: '*', // Allow all origins (modify as needed)
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
};

export default cors(corsOptions);

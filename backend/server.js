import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import registrationRoutes from './routes/registrationRoutes.js';
import connectDB from './config/db.js';  // Import MongoDB connection
import kitRegistrationRoutes from './routes/kitRegistrationRoutes.js';
import kitRoutes from './routes/kits.js'; // Import kit routes


const app = express();

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the database
connectDB();

// Routes
app.use('/api/registrations', registrationRoutes);
app.use('/api', kitRegistrationRoutes);
app.use('/api', kitRoutes);


// Server Listener
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import registrationRoutes from './routes/kitRegistrationRoutes.js';
// import connectDB from './config/db.js';
// import kitRoutes from './routes/kits.js';

// const app = express();

// dotenv.config();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Connect to the database
// connectDB();

// // Routes
// app.use('/api/registrations', registrationRoutes);
// app.use('/api/kits', kitRoutes); // Ensure correct route prefix for kits

// // Server Listener
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



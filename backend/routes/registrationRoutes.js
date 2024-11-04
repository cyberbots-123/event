import express from 'express';
import Registration from '../models/Registration.js';
import nodemailer from 'nodemailer';  // Import nodemailer

const router = express.Router();

// POST - Create a new registration
router.post('/', async (req, res) => {
  try {
    const newRegistration = new Registration(req.body);
    const savedRegistration = await newRegistration.save();

    // Set up nodemailer to send an email
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Email content
    let mailOptions = {
      from: process.env.EMAIL_USER, // sender address
      to: req.body.email, // receiver's email
      subject: 'Thank you for registering!',
      text: `Dear ${req.body.fullName},\n\nThank you for registering.\n\nFor more details\ncontact\n9514909991.\n\nBest Regards,\nCyberbots`, // plain text body
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    // Respond with the saved registration data
    res.status(201).json(savedRegistration);
  } catch (error) {
    res.status(500).json({ message: 'Error creating registration', error });
  }
});

export default router;

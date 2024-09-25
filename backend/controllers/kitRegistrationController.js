
// controllers/kitRegistrationController.js
import KitRegistration from '../models/kitRegistrationModel.js';
import nodemailer from 'nodemailer';

// Function to send confirmation email
const sendConfirmationEmail = (kitData) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',  // You can use other services like Outlook, Yahoo, or a custom SMTP server
    auth: {
      user: process.env.EMAIL_USER,  // Your email address
      pass: process.env.EMAIL_PASS   // Your email password or app password
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: kitData.email,  // The user's email from the registration form
    subject: 'Kit Registration Successful',
    text: `Dear ${kitData.fullName},\n\nYour kit registration was successful. Thank you for registering with us!\n\nHere are your details:\n\nProduct Name: ${kitData.productName}\nPrice: ${kitData.price}/-\n\nFor more details\nContact\n9514909991\n\nRegards,\nCyberbots`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

// Controller for registering a new kit
export const registerKit = async (req, res) => {
  try {
    // Create a new kit registration object from request body
    const kitData = new KitRegistration(req.body);

    // Save the new registration data to the database
    const savedKit = await kitData.save();
    
    // Send confirmation email to the user
    sendConfirmationEmail(savedKit);

    // Respond with the saved registration data
    res.status(201).json(savedKit);
  } catch (error) {
    // Respond with an error if saving to the database fails
    res.status(400).json({ message: error.message });
  }
};

// Controller for fetching all registered kits
export const getKits = async (req, res) => {
  try {
    // Retrieve all kit registrations from the database
    const kits = await KitRegistration.find();

    // Respond with the retrieved data
    res.status(200).json(kits);
  } catch (error) {
    // Respond with an error if retrieval fails
    res.status(400).json({ message: error.message });
  }
};


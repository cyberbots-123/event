import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  zone: {
    type: String,
    required: true,
  },
  facultyName: String,
  mobileNumber: {
    type: String,
    required: true,
  },
  alternateMobileNumber: String,
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Registration = mongoose.model('Registration', registrationSchema);

export default Registration;

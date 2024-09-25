// models/kitRegistrationModel.js
import mongoose from 'mongoose';

const kitRegistrationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  schoolName: { type: String, required: true },
  grade: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  alternateMobileNumber: { type: String },
  email: { type: String, required: true },
  address: { type: String, required: true },
  landmark: { type: String },
  productName: { type: String, required: true },
  price: { type: Number, required: true }
}, {
  timestamps: true
});

const KitRegistration = mongoose.model('KitRegistration', kitRegistrationSchema);

export default KitRegistration;


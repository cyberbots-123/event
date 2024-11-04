// models/kitModel.js
import mongoose from 'mongoose';

const kitSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    components: { type: [String], required: true },
    price: { type: String, required: true },
    images: { type: [String] },
    makingVideo: { type: String },
});

const Kit = mongoose.model('Kit', kitSchema);

export default Kit;


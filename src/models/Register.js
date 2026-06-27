import mongoose from 'mongoose';

const RegisterSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  emailAddress: { type: String, required: true },
  mobile: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  addressLine1: { type: String, required: true },
  cityDistrict: { type: String, required: true },
  state: { type: String, required: true },
  studentClass: { type: String, required: true }
}, { timestamps: true });

export default mongoose.models.Register || mongoose.model('Register', RegisterSchema);

import mongoose from 'mongoose';

const ResultSchema = new mongoose.Schema({
  rollNumber: { type: String, required: true, unique: true },
  dateOfBirth: { type: String, required: true },
  studentName: { type: String, required: true },
  marksObtained: { type: Number, required: true },
  totalMarks: { type: Number, required: true },
  status: { type: String, required: true, default: 'Pass' }
}, { timestamps: true });

export default mongoose.models.Result || mongoose.model('Result', ResultSchema);

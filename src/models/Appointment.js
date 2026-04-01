import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name.'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email.'],
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: [true, 'Please provide your phone number.'],
    trim: true,
  },
  service: {
    type: String,
    required: [true, 'Please select a service.'],
    enum: ['Routine Eye Exam', 'LASIK Consultation', 'Cataract Surgery', 'Glaucoma Treatment', 'Other'],
    default: 'Routine Eye Exam',
  },
  preferredDate: {
    type: Date,
    required: [true, 'Please select a preferred date.'],
  },
  message: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Cancelled', 'Completed'],
    default: 'Pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema);

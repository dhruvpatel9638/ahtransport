import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Contact name is required']
  },
  companyName: {
    type: String,
    required: [true, 'Company name is required']
  },
  phone: {
    type: String,
    required: [true, 'Contact phone number is required']
  },
  email: {
    type: String,
    default: ''
  },
  pickupLocation: {
    type: String,
    required: [true, 'Pickup location is required']
  },
  deliveryLocation: {
    type: String,
    required: [true, 'Delivery location is required']
  },
  vehicleType: {
    type: String,
    default: 'Eicher Pro 3019'
  },
  message: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Quote = mongoose.models.Quote || mongoose.model('Quote', quoteSchema);
export default Quote;

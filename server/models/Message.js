import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
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
  message: {
    type: String,
    required: [true, 'Message text is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);
export default Message;

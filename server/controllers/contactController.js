import mongoose from 'mongoose';
import Message from '../models/Message.js';

export const createContactMessage = async (req, res) => {
  const { name, companyName, phone, email, message } = req.body;

  // Basic validation checks
  if (!name || !companyName || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all required fields: name, companyName, phone, message.'
    });
  }

  const newMessageData = {
    name,
    companyName,
    phone,
    email,
    message,
    createdAt: new Date()
  };

  try {
    // Check if database is active (Mongoose readyState 1 means connected)
    if (mongoose.connection.readyState === 1) {
      const contactMsg = new Message(newMessageData);
      await contactMsg.save();
      console.log('Successfully saved Contact Message to database:', contactMsg._id);
      
      return res.status(201).json({
        success: true,
        message: 'Inquiry message submitted successfully.',
        data: contactMsg
      });
    } else {
      // Local fallback logging
      console.log('[LOCAL DISPATCH LOG] New General Inquiry received via fallback:');
      console.table(newMessageData);
      
      return res.status(200).json({
        success: true,
        message: 'General inquiry registered successfully (local dispatch server logging active).',
        data: {
          ...newMessageData,
          _id: `fallback_id_${Date.now()}`
        }
      });
    }
  } catch (error) {
    console.error('Error processing contact message creation:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while storing inquiry request.',
      error: error.message
    });
  }
};

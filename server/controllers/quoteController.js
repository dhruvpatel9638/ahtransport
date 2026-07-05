import mongoose from 'mongoose';
import Quote from '../models/Quote.js';

export const createQuote = async (req, res) => {
  const { name, companyName, phone, email, pickupLocation, deliveryLocation, vehicleType, message } = req.body;

  // Basic validation checks
  if (!name || !companyName || !phone || !pickupLocation || !deliveryLocation) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all required fields: name, companyName, phone, pickupLocation, deliveryLocation.'
    });
  }

  const newQuoteData = {
    name,
    companyName,
    phone,
    email,
    pickupLocation,
    deliveryLocation,
    vehicleType,
    message,
    createdAt: new Date()
  };

  try {
    // Check if database is active (Mongoose readyState 1 means connected)
    if (mongoose.connection.readyState === 1) {
      const quote = new Quote(newQuoteData);
      await quote.save();
      console.log('Successfully saved Quote to database:', quote._id);
      
      return res.status(201).json({
        success: true,
        message: 'Cargo quote request recorded successfully.',
        data: quote
      });
    } else {
      // Local fallback logging
      console.log('[LOCAL DISPATCH LOG] New Quote Request received via fallback:');
      console.table(newQuoteData);
      
      return res.status(200).json({
        success: true,
        message: 'Quote request registered successfully (local dispatch server logging active).',
        data: {
          ...newQuoteData,
          _id: `fallback_id_${Date.now()}`
        }
      });
    }
  } catch (error) {
    console.error('Error processing quote creation:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while storing transport request.',
      error: error.message
    });
  }
};

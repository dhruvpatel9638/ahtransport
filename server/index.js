import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';
import apiRouter from './routes/api.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routing Middleware
app.use('/api', apiRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'AH Transport server is operational.' });
});

// Root check endpoint
app.get('/', (req, res) => {
  res.send('AH Transport API Server is running.');
});

// Database connection & Server initialization
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.warn('WARNING: MONGO_URI not found in environment variables. Starting server with local mock storage / file logging fallback.');
  // Initialize server without database connection
  app.listen(PORT, () => {
    console.log(`Server running in DEMO mode on port ${PORT}`);
  });
} else {
  mongoose.connect(mongoUri)
    .then(() => {
      console.log('Connected successfully to MongoDB database.');
      app.listen(PORT, () => {
        console.log(`Server running in database mode on port ${PORT}`);
      });
    })
    .catch((err) => {
      console.error('Database connection failed. Fallback to offline port listening:', err.message);
      app.listen(PORT, () => {
        console.log(`Server running in fallback mode on port ${PORT}`);
      });
    });
}

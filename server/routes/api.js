import express from 'express';
import { createQuote } from '../controllers/quoteController.js';
import { createContactMessage } from '../controllers/contactController.js';

const router = express.Router();

// Define paths
router.post('/quotes', createQuote);
router.post('/contact', createContactMessage);

export default router;

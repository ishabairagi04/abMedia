// server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Mock Data for demo
const destinations = [
  { name: 'Goa', price: 4999 },
  { name: 'Kashmir', price: 4999 },
  { name: 'Kerala', price: 4999 },
];

const packages = [
  { name: 'Golden Temple Tour' },
  { name: 'Amazing Kerala Tour' },
  { name: 'Trip to Goa' },
];

// API Routes
app.get('/api/destinations', (req, res) => {
  res.json(destinations);
});

app.get('/api/packages/top-selling', (req, res) => {
  res.json(packages);
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

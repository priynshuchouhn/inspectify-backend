import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors({
  origin: '*', // or specify frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Routes
app.use('/api/auth', authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.log(err));

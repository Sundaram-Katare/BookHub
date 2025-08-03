import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import bookRoutes from './routes/bookRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Mongo connected');
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });

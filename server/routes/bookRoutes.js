import express from 'express';
import Book from '../models/Book.js';
import { authMiddleware } from '../middleware/auth.js';
import User from '../models/User.js';

const router = express.Router();

// Get all books
router.get('/', async (req, res) => {
  const books = await Book.find().populate('addedBy', 'name');
  res.json(books);
});

// Add new book
router.post('/', authMiddleware, async (req, res) => {
  const { title, author, coverImage } = req.body;
  const book = await Book.create({
    title,
    author,
    coverImage,
    addedBy: req.user.id,
  });
  res.json(book);
});

export default router;

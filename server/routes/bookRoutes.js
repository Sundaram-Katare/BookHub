import express from "express";
import Book from "../models/Book.js";
import { authMiddleware } from "../middleware/auth.js";
import User from "../models/User.js";

const router = express.Router();

// Get all books
router.get("/", async (req, res) => {
  const books = await Book.find().populate("addedBy", "name");
  res.json(books);
});

// Add new book
router.post("/", authMiddleware, async (req, res) => {
  const { title, author, coverImage } = req.body;
  const book = await Book.create({
    title,
    author,
    coverImage,
    addedBy: req.user.id,
  });
  res.json(book);
});

// return books add by a username
router.get("/add", async (req, res) => {
  const username = req.query.username;

  // get userdata by username
  const UserData = await User.findOne({ name: username });

  //if user is not exist
  if (UserData == null) {
    res.json({ error: "username not exist" });
  }
  const UserId = UserData._id;

  //get all books added by user
  const booksData = await Book.find({ addedBy: UserId });

  //if no book added by user
  if (booksData.length == 0) {
    res.json({ response: "no book added by user" });
  }
  // push only title name in books array
  const books = [];
  for (let book of booksData) {
    books.push(book?.title);
  }
  res.json({
    username,
    boosk: books,
  });
});

export default router;

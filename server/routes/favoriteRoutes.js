import express from "express";
import User from "../models/User.js";
import Book from "../models/Book.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

//it gets user's favorite books
router.get("/", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate({
      path: "favorites",
      populate: {
        path: "addedBy",
        select: "name",
      },
    });
    res.json(user.favorites || []);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

//adding book to user's favorites
router.post("/:bookId", authMiddleware, async (req, res) => {
  try {
    const { bookId } = req.params;
    const user = await User.findById(req.user.id);

    if (!user.favorites.includes(bookId)) {
      user.favorites.push(bookId);
      await user.save();
      res.json({ message: "Book added to favorites" });
    } else {
      res.status(400).json({ message: "Book already in favorites" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

//for removing book from user's favorites
router.delete("/:bookId", authMiddleware, async (req, res) => {
  try {
    const { bookId } = req.params;
    const user = await User.findById(req.user.id);

    user.favorites = user.favorites.filter((id) => id.toString() !== bookId);
    await user.save();
    res.json({ message: "Book removed from favorites" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

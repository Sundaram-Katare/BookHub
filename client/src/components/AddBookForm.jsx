import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "https://bookhub-1-ijt4.onrender.com";

const AddBookForm = ({ onAdded }) => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    coverImage: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(`${BACKEND_URL}/api/books`, form, {
        headers: { Authorization: token },
      });
      toast.success("Book added successfully");
      setForm({ title: "", author: "", coverImage: "" });
      onAdded(); // refresh books
    } catch (err) {
      toast.error(err.response?.data?.error || "Error adding book");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded mb-4 max-w-md">
      <h3 className="font-bold mb-2">Add a Book</h3>
      <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="w-full p-2 border rounded mb-2" required />
      <input placeholder="Author" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })}
        className="w-full p-2 border rounded mb-2" required />
      <input placeholder="Cover Image URL" value={form.coverImage} onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
        className="w-full p-2 border rounded mb-2" required />
      <button className="bg-green-600 text-white px-4 py-2 rounded">Add Book</button>
    </form>
  );
};

export default AddBookForm;

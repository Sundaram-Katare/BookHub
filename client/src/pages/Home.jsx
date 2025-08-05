import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
import BookModal from "../components/BookModal";
import AddBookForm from "../components/AddBookForm";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const BACKEND_URL =
  import.meta.env.BACKEND_URL || "https://bookhub-1-ijt4.onrender.com";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [selected, setSelected] = useState(null);
  const { user } = useAuth();

  const fetchBooks = () => {
    axios
      .get(`${BACKEND_URL}/api/books`)
      .then((res) => setBooks(res.data))
      .catch((err) => toast.error("Failed to load books"));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="p-4 bg-orange-100 min-h-screen">
      <p className="text-center mb-4 text-xl animate-bounce">
        Login/Signup to add books
      </p>
      {user && <AddBookForm onAdded={fetchBooks} />}
      {selected && (
        <BookModal book={selected} onClose={() => setSelected(null)} />
      )}

      <div>
        <h2 className="text-6xl mb-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-black text-center mt-6">
          All Books
        </h2>
        <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book) => (
            <BookCard
              key={book._id}
              book={book}
              onClick={() => setSelected(book)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

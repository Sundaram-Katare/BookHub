import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
import BookModal from "../components/BookModal";
import AddBookForm from "../components/AddBookForm";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [selected, setSelected] = useState(null);
  const { user } = useAuth();

  const fetchBooks = () => {
    axios.get("http://localhost:5000/api/books")
      .then((res) => setBooks(res.data))
      .catch((err) => alert("Failed to load books"));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="p-4 bg-orange-100 min-h-screen">
      {user && <AddBookForm onAdded={fetchBooks} />}
      {selected && (
        <BookModal book={selected} onClose={() => setSelected(null)} />
      )}

      <div>
        <h2 className="text-6xl mb-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-black text-center mt-6">All Books</h2>
        <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book) => (
            <BookCard key={book._id} book={book} onClick={() => setSelected(book)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

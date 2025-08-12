import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BookCard from "../components/BookCard";
import BookModal from "../components/BookModal";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "https://bookhub-1-ijt4.onrender.com";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(true);
    const [removingBookId, setRemovingBookId] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      toast.error("Please login to view your favorites");
      navigate("/login");
      return;
    }

    fetchFavorites();
  }, [user, navigate]);

  const fetchFavorites = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${BACKEND_URL}/api/favorites`, {
        headers: { Authorization: token },
      });
      setFavorites(response.data);
    } catch (error) {
      toast.error("Failed to load favorites");
    } finally {
      setLoading(false);
    }
  };

    const handleRemoveFromFavorites = async (bookId) => {
    setRemovingBookId(bookId);
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${BACKEND_URL}/api/favorites/${bookId}`, {
        headers: { Authorization: token },
      });
      
      // Remove the book from the local state immediately for better UX
      setFavorites(favorites.filter(book => book._id !== bookId));
      toast.success("Removed from favorites!");
    } catch (error) {
      toast.error("Failed to remove from favorites");
    } finally {
      setRemovingBookId(null);
    }
  };

  if (!user) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-orange-100 flex items-center justify-center">
        <div className="text-2xl font-semibold text-gray-700">
          Loading your favorites...
        </div>
      </div>
    );
  }

   return (
    <div className="p-4 bg-orange-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-6xl mb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-black">
            My Favorites
          </h1>
          <p className="text-xl text-gray-700">
            {favorites.length > 0 
              ? `You have ${favorites.length} favorite book${favorites.length === 1 ? '' : 's'}`
              : "You haven't added any books to your favorites yet"
            }
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">No favorites yet</h2>
            <p className="text-gray-600 mb-6">
              Start exploring books and add them to your favorites to see them here!
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Browse Books
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {favorites.map((book) => (
              <div key={book._id} className="relative">
                <BookCard 
                  book={book} 
                  onClick={() => setSelectedBook(book)}
                  showFavoriteButton={false}
                />
                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => handleRemoveFromFavorites(book._id)}
                    disabled={removingBookId === book._id}
                    className="bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white p-2 rounded-full shadow-lg transition-colors flex items-center justify-center"
                    title="Remove from favorites"
                  >
                    {removingBookId === book._id ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedBook && (
          <BookModal 
            book={selectedBook} 
            onClose={() => setSelectedBook(null)} 
          />
        )}
      </div>
    </div>
  );
};

export default Favorites;

import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const BookCard = ({ book, onClick, showFavoriteButton = true, onFavoriteChange }) => {
  const [isAddingToFavorites, setIsAddingToFavorites] = useState(false);
  const { user } = useAuth();

  const handleAddToFavorites = async (e) => {
    e.stopPropagation(); 
    
    if (!user) {
      toast.error("Please login to add favorites");
      return;
    }

    setIsAddingToFavorites(true);
    try {
      const token = localStorage.getItem("token");
      await axios.post(`${BACKEND_URL}/api/favorites/${book._id}`, {}, {
        headers: { Authorization: token },
      });
      toast.success("Added to favorites!");
      if (onFavoriteChange) onFavoriteChange();
    } catch (error) {
      if (error.response?.status === 400) {
        toast.error("Book already in favorites");
      } else {
        toast.error("Failed to add to favorites");
      }
    } finally {
      setIsAddingToFavorites(false);
    }
  };

  return (
  <div className="p-4 sm:p-6 md:p-4 lg:p-6">
    <div
      className="bg-gradient-to-r from-[#BB6653] to-[#D99A6C] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
    >
      <div className="w-full flex justify-center items-center p-4" onClick={onClick}>
        <img
          src={book.coverImage}
          alt={book.title}
          className="max-h-64 w-auto object-contain rounded"
        />
      </div>
      <div className="px-4 pb-4 space-y-2" onClick={onClick}>
        <h2 className="text-xl font-bold text-gray-800 line-clamp-2">{book.title}</h2>
        <p className="text-sm text-black">
          Added by: <span className="font-medium">{book.addedBy.name}</span>
        </p>
      </div>
      
      {showFavoriteButton && user && (
        <div className="px-4 pb-4">
          <button
            onClick={handleAddToFavorites}
            disabled={isAddingToFavorites}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            {isAddingToFavorites ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Adding...
              </>
            ) : (
              <>
                <span>❤️</span>
                Add to Favorites
              </>
            )}
          </button>
        </div>
      )}
    </div>
  </div>
  );
};

export default BookCard;
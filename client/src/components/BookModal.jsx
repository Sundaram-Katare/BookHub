const BookModal = ({ book, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl font-serif p-6 w-80 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 text-xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-2">{book.title}</h2>
        <p className="mb-2 text-sm text-gray-700 font-bold">Author: <span className="font-semibold">{book.author}</span></p>
        <p className="mb-4 text-sm text-gray-700 font-bold">Added by: <span className="font-semibold">{book.addedBy.name}</span></p>
        <img src={book.coverImage} alt="cover" className="rounded w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default BookModal;

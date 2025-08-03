const BookCard = ({ book, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition"
  >
    <h2 className="text-lg font-semibold">{book.title}</h2>
    <p className="text-sm text-gray-600">Added by: {book.addedBy.name}</p>
    <img
      src={book.coverImage}
      alt={book.title}
      className="w-full h-[350px] object-cover rounded"
    />
  </div>
);

export default BookCard;

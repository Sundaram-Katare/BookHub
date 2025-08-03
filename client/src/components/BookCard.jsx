const BookCard = ({ book, onClick }) => (
  <div className="p-4 sm:p-6 md:p-4 lg:p-6">
    <div
      onClick={onClick}
      className="bg-gradient-to-r from-[#BB6653] to-[#D99A6C] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
    >
      <div className="w-full flex justify-center items-center p-4">
        <img
          src={book.coverImage}
          alt={book.title}
          className="max-h-64 w-auto object-contain rounded"
        />
      </div>
      <div className="px-4 pb-4 space-y-2">
        <h2 className="text-xl font-bold text-gray-800 line-clamp-2">{book.title}</h2>
        <p className="text-sm text-black">
          Added by: <span className="font-medium">{book.addedBy.name}</span>
        </p>
      </div>
    </div>
  </div>
);

export default BookCard;
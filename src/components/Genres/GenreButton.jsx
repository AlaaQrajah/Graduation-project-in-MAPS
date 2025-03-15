const GenreButton = ({ genre, onSelectGenre }) => {
  return (
    <button
      type="button"
      onClick={() => onSelectGenre(genre)}
      className="w-full flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 ease-in-out"
    >
      <img
        src={genre.image_background}
        alt={genre.name}
        className="w-12 h-12 rounded-lg object-cover"
      />
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
        {genre.name}
      </span>
    </button>
  );
};

export default GenreButton;

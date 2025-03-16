import "../FilesCss/CssToFilesGenre/CssForGenreButton.css";
const GenreButton = ({ genre, onSelectGenre }) => {
  return (
    <button
      type="button"
      onClick={() => onSelectGenre(genre)}
      className="genre-button"
    >
      <img
        src={genre.image_background}
        alt={genre.name}
        className="genre-button-image"
      />
      <span className="genre-button-name">{genre.name}</span>
    </button>
  );
};
export default GenreButton;

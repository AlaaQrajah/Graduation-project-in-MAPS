import '../FilesCss/CsstoGameDetalis/GameMedia.css';

const GameMedia = ({ details, screenshots }) => {
  return (
    <div className="media-container">
      <div className="media-main-image">
        <img
          src={details.background_image}
          alt={details.name}
          className="media-image"
        />
      </div>
      <div className="media-grid">
        {screenshots.slice(0, 4).map((screenshot, index) => (
          <div key={screenshot.id} className="media-thumbnail">
            <img
              src={screenshot.image}
              alt={`Screenshot ${index + 1}`}
              className="media-thumbnail-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameMedia;
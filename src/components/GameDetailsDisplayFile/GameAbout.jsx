import { FaGamepad } from 'react-icons/fa';
import '../FilesCss/CsstoGameDetalis/GameAbout.css';

const GameAbout = ({ description, showFullDescription, setShowFullDescription }) => {
  return (
    <div className="about-container">
      <h2 className="about-title">
        <FaGamepad className="text-green-500" />
        About
      </h2>
      <div className="about-content">
        <p className={`about-description ${!showFullDescription && 'line-clamp-4'}`}>
          {description}
        </p>
        <button
          onClick={() => setShowFullDescription(!showFullDescription)}
          className="about-button"
        >
          {showFullDescription ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default GameAbout;
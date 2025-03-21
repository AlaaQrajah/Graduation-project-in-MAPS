import { useState } from "react";
import { Link } from "react-router-dom";
import getCroppedImageUrl from "../../services/image-url";
import CriticScore from "../CriticScore";
import { Emoji } from "../Emoji";
import PlatformIconList from "../Platform/PlatformIconList";
import { FaCalendar, FaGamepad, FaGift, FaTimes } from 'react-icons/fa';
import "../../App.css";
import "../FilesCss/CssToFilesGame/CssForGameCard.css";
const GameCard = ({ game }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setIsHovered(true);
    }, 150);  
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setIsHovered(false);
  };

  return (
    <div
      className={`game-card ${isHovered ? 'is-hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/game/${game.id}`} className="game-link">
        <div className="game-image-container">
          <img
            className="game-image"
            src={getCroppedImageUrl(game.background_image)}
            alt={game.name}
            onError={(e) => {
              e.target.src = '../../assets/images/ErrorPage.png';
            }}
          />
          <div className="game-image-overlay">
            <div className="game-platforms-overlay">
              {game.parent_platforms && (
                <PlatformIconList
                  platforms={game.parent_platforms.map((p) => p.platform)}
                />
              )}
            </div>
          </div>
        </div>
      </Link>

      <div className="game-info">
        <div className="game-details">
          <div className="game-platforms">
            {game.parent_platforms && (
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
            )}
          </div>
          <div className="game-score">
            <CriticScore score={game.metacritic} />
          </div>
        </div>

        <Link to={`/game/${game.id}`} className="game-title-link">
          <h5 className="game-title">
            {game.name} <Emoji rating={game.rating_top} />
          </h5>
        </Link>

        {isHovered && (
          <div className="hover-card">
            <div className="hover-card-header">
              <div>
                <h3 className="hover-card-title">{game.name}</h3>
                <div className="hover-card-platforms">
                  <PlatformIconList
                    platforms={game.parent_platforms?.map(p => p.platform)}
                  />
                </div>
              </div>
              <CriticScore score={game.metacritic} />
            </div>

            <div className="hover-card-content">
              <div className="hover-card-info">
                <FaCalendar className="hover-card-icon" />
                <span>{new Date(game.released).toLocaleDateString()}</span>
              </div>

              {game.genres && (
                <div className="hover-card-section">
                  <div className="hover-card-info">
                    <FaGamepad className="hover-card-icon" />
                    <span>Genres:</span>
                  </div>
                  <div className="hover-card-genres">
                    {game.genres.map(genre => (
                      <span key={genre.id} className="hover-card-genre">
                        {genre.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="hover-card-buttons">
                <button className="hover-card-add-button">
                  <FaGift className="hover-card-icon" />
                  <span>Add to My Games</span>
                </button>
                <button 
                  className="hover-card-hide-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsHovered(false);
                  }}
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          </div>
        )}
        <button  onClick={() => setIsOpen(true)} type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 me-2 mb-2 mt-3 w-full p-4"  >View more game details</button>
      </div>
    </div>
  );
};

export default GameCard;

 
 
   
  
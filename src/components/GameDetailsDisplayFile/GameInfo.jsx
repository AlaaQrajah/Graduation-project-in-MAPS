import { FaPlus, FaHeart } from 'react-icons/fa';
import PlatformIconList from "../Platform/PlatformIconList";
import { Emoji } from "../Emoji";
import toast, { Toaster } from 'react-hot-toast';
import '../FilesCss/CsstoGameDetalis/GameInfo.css';

const GameInfo = ({ details }) => {
  const handleAddToMyGames = () => {
    toast.success(`${details.name} added to My Games!`, {
      icon: '🎮',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
      duration: 3000,
    });
  };

  const handleAddToWishlist = () => {
    toast.success(`${details.name} added to Wishlist!`, {
      icon: '💝',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
      duration: 3000,
    });
  };

  return (
    <div className="info-container">
      <Toaster position="top-center" />
      <div className="info-content">
        <div className="info-header">
          <div className="info-platforms">
            <span className="text-gray-400 text-sm">
              {new Date(details.released).toLocaleDateString()}
            </span>
            <PlatformIconList
              platforms={details.parent_platforms?.map(p => p.platform)}
              className="text-lg"
            />
          </div>
          <div className="info-rating">
            <div className="flex items-center gap-2">
              <div className="info-score">
                {details.metacritic || '??'}
              </div>
              <Emoji rating={details.rating_top} className="text-xl" />
            </div>
            <div className="text-xs text-gray-400">
              {details.ratings_count?.toLocaleString()} ratings
            </div>
          </div>
        </div>
        <h1 className="info-title">{details.name}</h1>
        <div className="info-buttons">
          <button onClick={handleAddToMyGames} className="add-game-button">
            <FaPlus className="text-sm" />
            <span>Add to My Games</span>
          </button>
          <button onClick={handleAddToWishlist} className="wishlist-button">
            <FaHeart className="text-sm" />
            <span>Add to Wishlist</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
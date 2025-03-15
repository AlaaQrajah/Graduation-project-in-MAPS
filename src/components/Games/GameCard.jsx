import getCroppedImageUrl from "../../services/image-url";
import CriticScore from "../CriticScore";
import { Emoji } from "../Emoji";
import PlatformIconList from "../Platform/PlatformIconList";
import "../../App.css";
const GameCard = ({ game }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
      <a href="#" className="block">
        <img
          className="rounded-t-lg w-full h-60 object-cover"
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
        />
      </a>
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <div className="platform">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          </div>
          <div className="score">
            <CriticScore score={game.metacritic} />
          </div>
        </div>
        <a href="#" className="block">
          <h5 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            {game.name} <Emoji rating={game.rating_top} />
          </h5>
        </a>
      </div>
    </div>
  );
};

export default GameCard;

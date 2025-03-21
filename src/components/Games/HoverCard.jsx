import { FaWindows, FaPlaystation, FaXbox, FaPlus, FaChevronRight } from 'react-icons/fa';
import CriticScore from "../CriticScore";
import PlatformIconList from "../Platform/PlatformIconList";

const HoverCard = ({ game }) => {
  return (
    <div className="absolute right-[-320px] top-0 w-[300px] bg-[#202020] rounded-lg shadow-xl p-4 z-[100]">
      <div className="flex justify-between items-start mb-4">
        <div className="game-header flex justify-between items-center w-full">
          <div className="game-platforms">
            {game.parent_platforms && (
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
            )}
          </div>
          <div className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded text-white text-sm">
            <FaPlus size={12} />
            <span>{game.added || 220}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg text-white">{game.name}</h3>
          <CriticScore score={game.metacritic} />
        </div>

        <div className="text-sm text-gray-300 space-y-2">
          <div>{new Date(game.released).toLocaleDateString()}</div>
          
          <div className="flex flex-wrap gap-2">
            {game.genres?.map(genre => (
              <span
                key={genre.id}
                className="text-xs bg-black/30 px-2 py-1 rounded-full"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <div className="text-sm">
            #{game.chart_position || 249} Top {new Date(game.released).getFullYear()}
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <button className="w-full bg-[#202020] hover:bg-[#303030] text-white px-3 py-2 rounded flex items-center justify-between transition-colors">
            <span>Show more like this</span>
            <FaChevronRight size={12} />
          </button>
          <button className="w-full bg-[#202020] hover:bg-[#303030] text-white px-3 py-2 rounded transition-colors">
            Hide this game
          </button>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
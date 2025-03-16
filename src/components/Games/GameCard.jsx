import getCroppedImageUrl from "../../services/image-url";
import CriticScore from "../CriticScore";
import { Emoji } from "../Emoji";
import PlatformIconList from "../Platform/PlatformIconList";
import "../../App.css";
import "../FilesCss/CssToFilesGame/CssForGameCard.css";

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <a href="#" className="game-link">
        <img
          className="game-image"
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
        />
      </a>
      <div className="game-info">
        <div className="game-details">
          <div className="game-platforms">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          </div>
          <div className="game-score">
            <CriticScore score={game.metacritic} />
          </div>
        </div>
        <a href="#" className="game-title-link">
          <h5 className="game-title">
            {game.name} <Emoji rating={game.rating_top} />
          </h5>
        </a>
      </div>
    </div>
  );
};

export default GameCard;

import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import "../../App.css";
import "../FilesCss/CssToFilesGame/CssForGameList.css";
const GameList = ({
  selectGenre,
  selectPlatform,
  selectSortOrder,
  searchText,
}) => {
  const { data, error, isLoading } = useGames(
    selectGenre,
    selectPlatform,
    selectSortOrder,
    searchText
  );
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error)
    return (
      <div className="error-alert " role="alert">
        <span className="alert-title">Danger alert!</span> {error}
      </div>
    );

  return (
    <>
      <div className="game-grid ">
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameList;

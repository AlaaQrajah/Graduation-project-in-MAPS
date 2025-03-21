import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import "../../App.css";
import "../FilesCss/CssToFilesGame/CssForGameList.css";
import ErrorPage from "../layout/ErrorPage";

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
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error)
    return (
      <div  role="alert">
        <ErrorPage ErrorMassage={"Danger alert!"+ error} />
      </div>
    );

  return (
    <>
      <div className="game-grid mx-3">
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

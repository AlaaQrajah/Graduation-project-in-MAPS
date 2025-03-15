import useGenres from "../../hooks/useGenres";
import SidebarSkeleton from "../Genres/SidebarSkeleton";
import "../../App.css";
import GamepadButton from "./GenreButton"
const GenreList = ({ onSelectGenre }) => {
  const { data, isLoading } = useGenres();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (isLoading)
    return (
      <div role="status">
        <div className="w-55">
          {isLoading &&
            skeletons.map((skeleton) => <SidebarSkeleton key={skeleton} />)}
        </div>
      </div>
    );
  return (
    <div className="w-55">
      {data.map((genre) => (
        <GamepadButton
          key={genre.id}
          genre={genre}
          onSelectGenre={onSelectGenre}
        />
      ))}
    </div>
  );
};

export default GenreList;

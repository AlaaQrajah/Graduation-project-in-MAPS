import GenreList from "../Genres/GenreList";
import "../../App.css";

const SideBar = ({ onSelectGenre }) => {
  return (
    <>
      <div id="sidebar" className="sidebar-app">
        <h3 className="SidebarTitle">Genres</h3>
        <div>
          <GenreList onSelectGenre={onSelectGenre} />
        </div>
      </div>
    </>
  );
};

export default SideBar;

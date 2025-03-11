import GenreList from "./GenreList";
import "../App.css";
import { HiAnnotation } from "react-icons/hi";

const SideBar = ({ onSelectGenre }) => {
  return (
    <>
      <div className="sidebar-app ">
        <h3 className="SidebarTitle">
          Genres
          <i id="cli" className="fa-solid fa-chart-bar "></i>{" "}
        </h3>
        <div>
          <GenreList onSelectGenre={onSelectGenre} />
        </div>
      </div>
    </>
  );
};

export default SideBar;

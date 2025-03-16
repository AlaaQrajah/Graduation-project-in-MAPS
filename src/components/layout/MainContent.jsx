import GameList from "../Games/GameList";
import PlatformSelector from "../Platform/PlatformSelector";
import SortSelector from "../SortSelector";
import { GameHeading } from "../Games/GameHeading";
import "../FilesCss/CssToLayout/CssForMainContent.css";
const MainContent = ({
  selectGenre,
  onSelectPlatform,
  selectPlatform,
  selectSortOrder,
  onSelectSortOrder,
  searchText,
}) => {
  return (
    <>
      <div className="main-content">
        <GameHeading
          selectGenre={selectGenre}
          selectPlatform={selectPlatform}
        />
        <div className="filters">
          <PlatformSelector
            onSelectPlatform={onSelectPlatform}
            selectPlatform={selectPlatform}
          />
          <SortSelector
            onSelectSortOrder={onSelectSortOrder}
            selectSortOrder={selectSortOrder}
          />
        </div>
        <div className="cover-card">
          <GameList
            selectPlatform={selectPlatform}
            selectGenre={selectGenre}
            selectSortOrder={selectSortOrder}
            searchText={searchText}
          />
        </div>
      </div>
    </>
  );
};

export default MainContent;

import "../FilesCss/CssToFilesGame/CssForGameHeading.css";
export const GameHeading = ({ selectGenre, selectPlatform }) => {
  const heading = `${selectGenre?.name || ""} ${
    selectPlatform?.name || ""
  } Games`;

  return <h1 className="Game-Heading-Title">{heading}</h1>;
};

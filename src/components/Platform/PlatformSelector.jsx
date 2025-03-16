import usePlatform from "../../hooks/usePlatform";
import "../FilesCss/Platform/CssForPlatformIconSelector.css";
const PlatformSelector = ({ onSelectPlatform, selectPlatform }) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <>
      <button
        id="platformDropdownButton"
        data-dropdown-toggle="platformDropdown"
        className="platform-button"
        type="button"
      >
        {selectPlatform?.name || "Platforms"}
        <svg
          className="dropdown-icon"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div id="platformDropdown" className="dropdown-menu ">
        <ul className="dropdown-list" aria-labelledby="platformDropdownButton">
          {data.map((platform) => (
            <li
              className="dropdown-item"
              key={platform.id}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.slug}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PlatformSelector;

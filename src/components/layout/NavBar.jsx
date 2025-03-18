import Logo from "./Logo";
import LogoImag from "../../assets/images/logo.webp";
import SearchInput from "../layout/SearchInput";
import "../../App.css";
import ThemeToggle from "../Theme/ThemeToggle";
import "../FilesCss/CssToLayout/CssForNavBar.css";
const NavBar = ({ toggleTheme, theme, onSearch }) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="navbar-app">
        {" "}
        <div className="gamp-app-header">
          <button onClick={handleRefresh} text="gamp app header">
            {" "}
            <Logo
              image={LogoImag}
              text="gamp app header"
              className="logo-header"
            />{" "}
          </button>
        </div>
        {/* Search Section */}
        <div className="search-section">
          <SearchInput onSearch={onSearch} className="search-section" />
        </div>
        {/* Theme Toggle Section */}
        <div className="theme-toggle-section">
          <ThemeToggle
            toggleTheme={toggleTheme}
            theme={theme}
            className="theme-toggle-section"
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;

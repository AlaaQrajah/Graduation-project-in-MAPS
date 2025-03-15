import Logo from "./Logo";
import LogoImag from "../../assets/images/logo.webp";
import SearchInput from "../layout/SearchInput";
import "../../App.css";
import ThemeToggle from "../Theme/ThemeToggle";

const NavBar = ({ toggleTheme, theme, onSearch }) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="navbar-app ">
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
        <div className="search-section col-span-9 md:col-span-10 flex justify-center md:justify-start">
          <SearchInput onSearch={onSearch} className="w-full md:w-96" />
        </div>
        {/* Theme Toggle Section */}
        <div className="theme-toggle-section col-span-1 flex justify-end">
          <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        </div>
      </div>
    </>
  );
};

export default NavBar;

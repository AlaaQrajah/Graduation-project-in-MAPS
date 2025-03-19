import SliderStars from "./SliderStars";
import SliderSunMoon from "./SliderSunMoon";
const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <div className="theme-mode">
      <label className="switch">
        {" "}
        <input
          id="input"
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
        <div className="slider round">
          {" "}
          <SliderSunMoon />
          <SliderStars />
        </div>
      </label>
    </div>
  );
};
export default ThemeToggle;

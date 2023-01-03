import { useTheme, useThemeUpdate } from "./ThemeContext";
const ThemeComponent = () => {
  const darkTheme = useTheme();
  const handleClickTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#e7e7e7",
    color: darkTheme ? "#e7e7e7" : "#333",
    padding: 24,
    margin: 24,
  };

  return (
    <>
      <button type="button" onClick={handleClickTheme}>
        {darkTheme ? "Dark mode" : "Light mode"}
      </button>
      <div style={themeStyles}>ThemeComponent</div>
    </>
  );
};
export default ThemeComponent;

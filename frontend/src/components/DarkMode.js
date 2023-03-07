import { BsSun, BsMoon } from "react-icons/bs";
import { useState, useEffect } from "react";
import "./components.css";
function DarkMode() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <button onClick={toggleTheme} className="darkmode">
        {theme === "light" ? <BsSun size="20px" /> : <BsMoon size="20px" />}
      </button>
    </div>
  );
}

export default DarkMode;

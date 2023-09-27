import { BsMoonFill, BsPerson, BsSunFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarSm from "./NavbarSm";
import SearchInput from "./SearchInput";
import { useLocation } from "react-router-dom";

const themes = {
  light: "light",
  dark: "dark",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme" || themes.light);
};

function Navbar() {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const handleTheme = () => {
    const { light, dark } = themes;
    const newTheme = theme === dark ? light : dark;
    document.documentElement.setAttribute("data-theme", theme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const location = useLocation();
  const title = location.pathname.split("/")[2];

  return (
    <div className="fixed top-0 w-full z-[999]">
      <NavbarSm handleTheme={handleTheme} />
      <nav className="bg-base-200 hidden sm:block">
        <div className="flex align-elements items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <Link
              to={"/"}
              className="btn btn-primary btn-sm capitalize md:text-2l"
            >
              IPhotos
            </Link>
          </div>
          {location.pathname == `/photoinfo/${title}` ? (
            <h1 className="text-xl sm:text-xl">
              Information about photo
            </h1>
          ) : (
            <div>
              <SearchInput />
            </div>
          )}
          <div className="flex items-center gap-4">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                onClick={handleTheme}
                className="text-end"
              />
              <BsSunFill className="swap-on h-6 w-6" />
              <BsMoonFill className="swap-off h-6 w-6" />
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

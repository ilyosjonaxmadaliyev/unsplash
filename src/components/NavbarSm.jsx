import { useLocation } from "react-router-dom";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import SearchInput from "./SearchInput";

function NavbarSm({ handleTheme }) {
  const location = useLocation();
  const title = location.pathname.split("/")[2];

  return (
    <div className="bg-base-200 sm:hidden">
      <div className="flex align-elements items-center justify-between py-2">
        {location.pathname == `/photoinfo/${title}` ? (
          <h1>Information about photo</h1>
        ) : (
          <div>
            {" "}
            <SearchInput />
          </div>
        )}
        <div className="flex items-center gap-4">
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={handleTheme} className="text-end" />
            <BsSunFill className="swap-off h-4 w-4" />
            <BsMoonFill className="swap-on h-4 w-4" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default NavbarSm;

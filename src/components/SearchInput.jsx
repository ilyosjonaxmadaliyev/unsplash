import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPhotos } from "../redux/photosSlice";

function SearchInput() {
  const { query } = useSelector((state) => state.photoState);
  const [state, setState] = useState(query);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch( searchPhotos( state ) );
      
  };

  return (
    <form onSubmit={handleSubmit} className="form-control">
      <div className="input-group">
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered input-sm w-60"
          onChange={(e) => setState(e.target.value)}
        />
        <button type="submit" className="btn btn-success btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default SearchInput;

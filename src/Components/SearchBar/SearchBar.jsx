import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>
        <Link to={`/search/${search}`}>Search</Link>{" "}
      </button>
    </div>
  );
};

export default SearchBar;

import { useState } from "react";
import Products from "../Products/Products";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    <Products search={search} />;
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;

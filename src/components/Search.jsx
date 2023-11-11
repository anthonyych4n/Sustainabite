/* eslint-disable react/prop-types */

import { redirect } from "react-router-dom";

function Search({ query, setQuery }) {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(query);

    redirect("/search-results");
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          className="search"
          type="text"
          placeholder="Search dishes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </>
  );
}

export default Search;

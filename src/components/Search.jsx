/* eslint-disable react/prop-types */
function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search dishes..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default Search;

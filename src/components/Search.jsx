/* eslint-disable react/prop-types */

function Search({ query, setQuery }) {
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(query);
    await makeApiRequest(query);

    // Redirect to search results page
    window.location.href = "/search-results";
  };

  async function makeApiRequest(query) {
    // Replace with your Flask endpoint URL and dish_name
    var apiUrl = "http://127.0.0.1:5000/dish/" + query;

    // Make API request
    const response = await fetch(apiUrl);
    const data = await response.json();
    localStorage.setItem("results", JSON.stringify(data));
    console.log(data);
  }

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

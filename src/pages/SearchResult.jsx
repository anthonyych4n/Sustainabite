/* eslint-disable react/prop-types */
import FoodChoice from "../components/FoodChoice";
import { useEffect } from "react";

function SearchResult({ results, setResults }) {
  useEffect(() => {
    if (results.length === 0) {
      const data = JSON.parse(localStorage.getItem("results"));
      setResults(data);
    }
  }, []);

  return (
    <div className="search-results flex-center flex-column">
      <h1>Results:</h1>
      <div className="food-choices">
        {Array.from(new Set(results.map((result) => result.title))).map(
          (uniqueTitle, index) => (
            <FoodChoice key={index} title={uniqueTitle} />
          )
        )}
      </div>
    </div>
  );
}

export default SearchResult;

/* eslint-disable react/prop-types */
import FoodChoice from "../components/FoodChoice";
import { useEffect } from "react";

function SearchResult({ results, setResults }) {
  console.log(results);
  useEffect(() => {
    if (results.length === 0 || !results) {
      const data = JSON.parse(localStorage.getItem("results"));
      console.log(data);
      setResults(data);
    }
  }, []);

  return (
    <div className="search-results flex-center flex-column">
      <h1>Results:</h1>
      <div className="food-choices">
        {Array.from(new Set(results.map((result) => result.title))).map(
          (uniqueTitle, index) => {
            // Find the result object with the matching title
            const matchingResult = results.find(
              (result) => result.title === uniqueTitle
            );

            console.log(matchingResult.ingredients);

            return (
              <>
              <FoodChoice
                key={index}
                title={uniqueTitle}
                ingredients={matchingResult.ingredients}
                // Add more properties as needed
              />
              </>
              
            );
          }
        )}
      </div>
    </div>
  );
}

export default SearchResult;

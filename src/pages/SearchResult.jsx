/* eslint-disable react/prop-types */
import FoodChoice from "../components/FoodChoice";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function SearchResult({ results, setResults }) {
  const [loading, setLoading] = useState(false);

  console.log(results);
  useEffect(() => {
    if (results.length === 0 || !results) {
      const data = JSON.parse(localStorage.getItem("results"));
      console.log(data);
      setResults(data);
    }
  }, []);

  return (
    <>
      <section>
        {" "}
        {loading ? (
          <>
            <div className="search-results">
              <h1 className="results">
                Loading... Please wait while we curate a recipe for you.
              </h1>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="search-results">
              <h1 className="results fade-in">Results:</h1>
              <div className="food-choices">
                {Array.from(new Set(results.map((result) => result.title))).map(
                  (uniqueTitle, index) => {
                    if (index < 8) {
                      // Find the result object with the matching title
                      const matchingResult = results.find(
                        (result) => result.title === uniqueTitle
                      );

                      console.log(matchingResult.ingredients);

                      return (
                        <FoodChoice
                          key={index}
                          title={uniqueTitle}
                          ingredients={matchingResult.ingredients}
                          setLoading={setLoading}
                          // Add more properties as needed
                        />
                      );
                    } else {
                      return null; // or any other fallback content
                    }
                  }
                )}
              </div>
            </div>
          </>
        )}
      </section>
      <section className="footer">
        <Footer />
      </section>
    </>
  );
}

export default SearchResult;

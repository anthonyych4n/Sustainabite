import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import SearchResult from "./pages/SearchResult";
import Recipe from "./pages/Recipe";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    localStorage.setItem("lastQuery", query);
  }, [query]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<MainPage setQuery={setQuery} query={query} />}
          />
          <Route
            path="/search-results"
            element={<SearchResult results={results} setResults={setResults} />}
          />
          <Route path="/search-results/recipe" element={<Recipe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

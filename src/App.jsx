import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<MainPage setQuery={setQuery} query={setQuery} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

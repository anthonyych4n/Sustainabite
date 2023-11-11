import { useState } from "react";
import MainPage from "./pages/MainPage";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <MainPage setQuery={setQuery} query={setQuery} />
    </>
  );
}

export default App;

/* eslint-disable react/prop-types */
import Search from "../components/Search";

function MainPage({ setQuery, query }) {
  return (
    <>
      <section>
        <div className="main-page">
          <h1>SustainaBites</h1>
          <Search setQuery={setQuery} query={query} />
        </div>
      </section>
    </>
  );
}

export default MainPage;

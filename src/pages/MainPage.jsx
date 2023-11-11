/* eslint-disable react/prop-types */
import Search from "../components/Search";
import Footer from "../components/Footer";


function MainPage({ setQuery, query }) {
  return (
    <>
      <section>
        <div className="mainpage">
          <h1 className="mainpageh1"></h1>
          <p>A web app to find more sustainable choices to your food.</p>
          <Search setQuery={setQuery} query={query} />
        </div>
      </section>
      <section className="footer">
        <Footer />
      </section>
    </>
  );
}

export default MainPage;

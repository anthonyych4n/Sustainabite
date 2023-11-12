/* eslint-disable react/prop-types */
import Search from "../components/Search";
import Footer from "../components/Footer";

function MainPage({ setQuery, query }) {
  return (
    <>
      <section>
        <div className="mainpage1">
          <div className="titlecontainer">
            <img src="src\assets\cart.png" />
            <img src="src\assets\name.png" />
            <p>A web app to find more sustainable choices to your food.</p>
          </div>
        </div>

        <div className="searchcontainer">
          <Search setQuery={setQuery} query={query} />
        </div>
        <div className="mainpage2">
    
        </div>
        <div className="mainpage3">
          <div className= "detailscontainer">
            <h2 className="details">Details</h2>
            <h className="detailstitle">How Sustainabite works</h>
            <p>
            Sustainabite is a website dedicated to helping individuals make sustainable choices when it comes to their meals. By entering the details of your meal, we analyze its carbon footprint and provide you with information on how it impacts the environment. With Sustainabite, you can make informed decisions and contribute to a greener future.
            </p>
          </div>
        <img className="Icon" src="src\assets\icon1.png" style={{ alignSelf: 'center' }}></img>
        </div>
        
        <div className="mainpage4"></div>
          <div className= "detailscontainer">
          <h2></h2>
          <p>
          </p>

        </div>

      </section>
      <section className="footer">
        <Footer />
      </section>
    </>
  );
}

export default MainPage;

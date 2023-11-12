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
        <div className="mainpage2"></div>
        <div className="mainpage3">
          <div className="detailscontainer">
            <h2 className="details">Details</h2>
            <h1 className="detailstitle">How Sustainabite works</h1>
            <p>
              Sustainabite is a website dedicated to helping individuals make
              sustainable choices when it comes to their meals. By entering the
              details of your meal, we analyze its carbon footprint and provide
              you with information on how it impacts the environment. With
              Sustainabite, you can make informed decisions and contribute to a
              greener future.
            </p>
          </div>
          <img
            className="Icon"
            src="src\assets\icon1.png"
            style={{ alignSelf: "center" }}
          ></img>
        </div>

        <div className="mainpage4">
          <div className="featurescontainer">
            <h2 className="features">Features</h2>
            <h3 className="feature-subtitle">
              Discover how our website can help you make sustainble choices for
              your meals.
            </h3>
            <div className="flex-row feature-boxes">
              <div className="box">
                <img className="features-img" src="src\assets\bag.png" />
                <div>
                  <h5 className="box-title">Personalized Recommendations</h5>
                  <p className="box-content">
                    Receive personalized recommendations on how to make your
                    meals more sustainable. Our algorithm considers your dietary
                    preferences and suggests ways to incorporate more
                    sustainable ingredients.
                  </p>
                </div>
              </div>
              <div className="box">
                <img className="features-img" src="src\assets\bag.png" />
                <div>
                  <h5 className="box-title">Meal Analysis</h5>
                  <p className="box-content">
                    Our system analyzes the environmental impact of each meal
                    and optimizes ingredients while providing easy instructions.
                  </p>
                </div>
              </div>
              <div className="box">
                <img className="features-img" src="src\assets\bag.png" />
                <div>
                  <h5 className="box-title">
                    Suggestable Ingredient Suggestions
                  </h5>
                  <p className="box-content">
                    Based on AI recommendations, we suggest alternative
                    ingredients that are more sustainable. These suggestions can
                    help lower the environmental impact of your meals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <Footer />
      </section>
    </>
  );
}

export default MainPage;

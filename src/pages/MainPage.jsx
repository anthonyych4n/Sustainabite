/* eslint-disable react/prop-types */
import Search from "../components/Search";
import Footer from "../components/Footer";
import Page from "../components/Page";

import { useInView } from "react-intersection-observer";

function MainPage({ setQuery, query }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <section>
        <div className="mainpage1">
          <div className="titlecontainer">
            <img className="fade-up" src="src\assets\cart.png" />
            <img className="fade-up" src="src\assets\name.png" />
            <p className="fade-in para">
              A web app to find more sustainable choices to your food.
            </p>
          </div>
        </div>

        <div className={`searchcontainer `}>
          <Search setQuery={setQuery} query={query} />
        </div>
        <div className="mainpage2"></div>
        <Page />
        <div className="mainpage4">
          <div className="featurescontainer">
            <h2 className="features">Features</h2>
            <h3 className="feature-subtitle">
              Discover how our website can help you make sustainble choices for
              your meals.
            </h3>
            <div className="flex-row feature-boxes">
              <div className={`box ${inView ? "fade-up" : ""} `} ref={ref}>
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
              <div className={`box ${inView ? "fade-up" : ""} `}>
                <img className="features-img" src="src\assets\bag.png" />
                <div>
                  <h5 className="box-title">Meal Analysis</h5>
                  <p className="box-content">
                    Our system analyzes the environmental impact of each meal
                    and optimizes ingredients while providing easy instructions.
                  </p>
                </div>
              </div>
              <div className={`box ${inView ? "fade-up" : ""} `}>
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

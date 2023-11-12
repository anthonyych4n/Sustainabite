/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import Footer from "../components/Footer";

import { useInView } from "react-intersection-observer";

function Recipe() {
  const [recipe, setRecipe] = useState("");
  const [reason, setReason] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [why, setWhy] = useState("");

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (recipe.length === 0 || !recipe) {
      const data = JSON.parse(localStorage.getItem("recipe"));
      const jsonString = data;
      console.log(jsonString);
      const jsonObject = JSON.parse(jsonString);
      console.log(jsonObject);
      console.log(jsonObject.reason);
      setRecipe(jsonObject.dish_name);
      setReason(jsonObject.reason);
      setIngredients(Object.entries(jsonObject.ingredients));
      setInstructions(jsonObject.instructions);
      setWhy(jsonObject.reason);
    }
  }, []);

  return (
    <>
      <section className="header-section">
        <div className="headercontainer">
          <h1 className="recipe-title fade-in">
            Discover Your Delicious and Sustainable Recipe
          </h1>
          <div className="yes">
            <h3 className="recipe-desc fade-from-right">
              Cook with ingredients that are good for you and the planet.
            </h3>
            <h2 className="recipe-dish fade-from-right">{recipe}</h2>
          </div>
        </div>
      </section>

      <section className="instructions-section">
        <div
          className={`ingredientscontainer ${inView ? "fade-up" : ""}`}
          ref={ref}
        >
          {ingredients.length > 0 && (
            <>
              <h2 className="ingredients-header">Ingredients</h2>
              {ingredients.map(([key, value]) => (
                <li className="revised-ingredient" key={key}>
                  <strong>{key}</strong> which you can subsitute for{" "}
                  <strong>{value}</strong>
                </li>
              ))}
            </>
          )}
        </div>
        <div className={`instructionscontainer ${inView ? "fade-up" : ""}`}>
          {instructions.length > 0 && (
            <>
              <h2 className="instructions-header">Instructions</h2>
              <ol className="instruction-list">
                {instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </>
          )}
        </div>
        <div className={`reason-section ${inView ? "fade-up" : ""}`}>
          {reason != "" && (
            <>
              <h2 className="reason-header">Reason</h2>
              <p className="reason">{reason}</p>
              {/* {why.map(([key, value]) => (
                  <li className="revised-ingredient" key={key}>
                    <strong>{key}</strong> because <strong>{value}</strong>
                  </li>
                ))} */}
            </>
          )}
        </div>
      </section>
      <section className="footer">
        <Footer />
      </section>
    </>
  );
}

export default Recipe;

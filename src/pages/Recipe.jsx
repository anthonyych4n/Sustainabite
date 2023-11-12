/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import Footer from "../components/Footer";

function Recipe() {
  const [recipe, setRecipe] = useState("");
  const [reason, setReason] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    if (recipe.length === 0 || !recipe) {
      const data = JSON.parse(localStorage.getItem("recipe"));
      const jsonString = data;
      console.log(jsonString);
      const jsonObject = JSON.parse(jsonString);
      console.log(jsonObject);
      setRecipe(jsonObject.dish_name);
      setReason(jsonObject.reason);
      setIngredients(Object.entries(jsonObject.ingredients));
      setInstructions(jsonObject.instructions);
    }
  }, []);

  return (
    <>
    <section>
    <div>
      <div className="header-section">
        <h1 className="recipe-title">Discover Your Delicious and Sustainable Recipe</h1>
        <h3 className="recipe-desc">Cook with ingredients that are good for you and the planet.</h3>
        <br />
        <h2 className="recipe-dish">{recipe}</h2>
      </div>
      <div className="ingredients-section">
        {ingredients.length > 0 && (
          <>
            <h2 className="ingredients-header">Ingredients</h2>
              {ingredients.map(([key, value]) => (
                <li className="revised-ingredient" key={key}>
                  <strong>{key}</strong> which you can subsitute for <strong>{value}</strong>
                </li>
              ))}
          </>
        )}
      </div>
      
      <div className="instructions-section">
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
      <div className="reason-section">
        {reason != "" && (
          <>
            <h2 className="reason-header">Reason</h2>
            <p className="reason-paragraph">{reason}</p>
          </>
        )}
      </div>
    </div>
    </section>
    <section className="footer">
      <Footer/>
    </section>
    </>
  );
}

export default Recipe;

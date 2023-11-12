/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";

function Recipe() {
  const [recipe, setRecipe] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [why, setWhy] = useState("");

  useEffect(() => {
    if (recipe.length === 0 || !recipe) {
      const data = JSON.parse(localStorage.getItem("recipe"));
      const jsonString = data;
      const jsonObject = JSON.parse(jsonString);
      console.log(jsonObject);
      setIngredients(Object.entries(jsonObject.ingredients));
      setInstructions(jsonObject.instructions);
      setWhy(jsonObject.reason);
    }
  }, []);

  return (
    <div>
      {ingredients.length > 0 && (
        <>
          <h2>Ingredients:</h2>
          <ul>
            {ingredients.map(([key, value]) => (
              <li key={key}>
                <strong>{key}</strong> which you can subsitute for {value}
              </li>
            ))}
          </ul>
        </>
      )}

      {instructions.length > 0 && (
        <>
          <h2>Instructions:</h2>
          <ol>
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </>
      )}
      <h2>Why:</h2>
      <p>{why}</p>
    </div>
  );
}

export default Recipe;

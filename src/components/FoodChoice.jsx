/* eslint-disable react/prop-types */
function FoodChoice({ title }) {
  return (
    <div className="flex-column">
      <h1>{title}</h1>
      <button className="button">Choose this recipe</button>
    </div>
  );
}

export default FoodChoice;

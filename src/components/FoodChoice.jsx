/* eslint-disable react/prop-types */
function FoodChoice({ title }) {
  function handleClick() {
    console.log(title);
  }
  return (
    <div className="flex-column">
      <h1>{title}</h1>
      <button onClick={handleClick} className="button">
        Choose this recipe
      </button>
    </div>
  );
}

export default FoodChoice;

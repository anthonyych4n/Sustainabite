/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function FoodChoice({ title, ingredients, setLoading }) {
  const [image, setImage] = useState(null);

  async function getFoodImage(title) {
    const apiKey = "jSZDikyJlk4VfUZn1GRXMYJfX6BH6wlAq3vz06XgfRNAPBwCaEn0kunN"; // Replace with your actual API key
    const apiUrl = `https://api.pexels.com/v1/search?query=${title}&per_page=1`;

    try {
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: apiKey,
        },
      });

      const data = await response.json();

      if (data.photos && data.photos.length > 0) {
        return data.photos[0].src.large;
      } else {
        console.error("Unable to retrieve image.");
        return null;
      }
    } catch (error) {
      console.error("Error fetching image:", error);
      return null;
    }
  }

  useEffect(() => {
    const fetchImage = async () => {
      const imageUrl = await getFoodImage(title);
      setImage(imageUrl);
    };

    fetchImage();
  }, [title]); // Include title as a dependency to re-run the effect when the title changes

  async function handleClick() {
    setLoading(true);
    console.log(title);
    var requestData = {
      dish_name: title,
      dish_ingredients: ingredients,
    };

    // Make a POST request to your Flask endpoint
    await fetch("http://127.0.0.1:5000/gpt/suggestion/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Display the response on the frontend
        localStorage.setItem("recipe", JSON.stringify(data));
        console.log(data);
        window.location.href = "/search-results/recipe";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="flex-column flex-center recipe-container fade-in delay2">
      <h1 className="primary">{title}</h1>
      <img className="food-image" src={image} alt={title} />
      <button onClick={handleClick} className="button">
        Choose this recipe
      </button>
    </div>
  );
}

export default FoodChoice;

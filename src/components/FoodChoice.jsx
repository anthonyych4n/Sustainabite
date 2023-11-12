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
    <div className="recipe-container">
      <div className="test">
        <img className="food-image" src={image} alt={title} />
        <div className="infocard">
          <h1 className="primary">{title}</h1>
          <a onClick={handleClick} className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 256 256"
            >
              <path
                fill="white"
                d="m229.66 109.66l-48 48a8 8 0 0 1-11.32-11.32L204.69 112H165a88 88 0 0 0-85.23 66a8 8 0 0 1-15.5-4A103.94 103.94 0 0 1 165 96h39.71l-34.37-34.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32ZM192 208H40V88a8 8 0 0 0-16 0v120a16 16 0 0 0 16 16h152a8 8 0 0 0 0-16Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FoodChoice;


import { createContext, useContext, useState } from "react";

const RecipeContext = createContext();

const starterRecipes = [
  {
    id: "1",
    title: "Creamy White Sauce Pasta",
    category: "Italian",
    time: "25 mins",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700",
    ingredients: [
      "Pasta",
      "Milk",
      "Butter",
      "Flour",
      "Cheese",
      "Salt and pepper",
    ],
    instructions:
      "Boil pasta. Prepare a white sauce using butter, flour and milk. Add cheese and seasoning, mix in the pasta and serve hot.",
  },
  {
    id: "2",
    title: "Fresh Garden Salad",
    category: "Healthy",
    time: "15 mins",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700",
    ingredients: [
      "Lettuce",
      "Tomatoes",
      "Cucumber",
      "Olive oil",
      "Lemon juice",
      "Salt",
    ],
    instructions:
      "Wash and chop the vegetables. Mix olive oil, lemon juice and salt. Toss everything together and serve fresh.",
  },
  {
    id: "3",
    title: "Homemade Pancakes",
    category: "Breakfast",
    time: "20 mins",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=700",
    ingredients: [
      "Flour",
      "Milk",
      "Egg",
      "Sugar",
      "Baking powder",
      "Butter",
    ],
    instructions:
      "Mix the ingredients into a smooth batter. Pour small portions onto a greased pan and cook both sides until golden.",
  },
];

function getSavedData(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState(() =>
    getSavedData("recipes", starterRecipes)
  );

  const [favorites, setFavorites] = useState(() =>
    getSavedData("favorites", [])
  );

  function addRecipe(recipe) {
    setRecipes((previous) => {
      const updated = [recipe, ...previous];
      localStorage.setItem("recipes", JSON.stringify(updated));
      return updated;
    });
  }

  function toggleFavorite(id) {
    setFavorites((previous) => {
      const updated = previous.includes(id)
        ? previous.filter((favoriteId) => favoriteId !== id)
        : [...previous, id];

      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  }

  return (
    <RecipeContext.Provider
      value={{ recipes, favorites, addRecipe, toggleFavorite }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  return useContext(RecipeContext);
}

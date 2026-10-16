
import { Link, useParams } from "react-router-dom";
import { useRecipes } from "../context/RecipeContext";

function RecipeDetails() {
  const { id } = useParams();
  const { recipes, favorites, toggleFavorite } = useRecipes();

  const recipe = recipes.find((item) => item.id === id);

  if (!recipe) {
    return (
      <main className="page-container empty-state">
        <h1>Recipe not found</h1>
        <Link to="/" className="view-button">
          Back to Home
        </Link>
      </main>
    );
  }

  const isFavorite = favorites.includes(recipe.id);

  return (
    <main className="page-container details-page">
      <Link to="/" className="back-link">
        ← Back to Recipes
      </Link>

      <div className="details-layout">
        <img
          className="details-image"
          src={recipe.image}
          alt={recipe.title}
        />

        <div className="details-content">
          <span className="category">{recipe.category}</span>
          <h1>{recipe.title}</h1>
          <p className="details-time">⏱ Cooking time: {recipe.time}</p>

          <button
            className={`primary-button ${
              isFavorite ? "favorite-active" : ""
            }`}
            onClick={() => toggleFavorite(recipe.id)}
          >
            {isFavorite ? "♥ Remove from Favorites" : "♡ Add to Favorites"}
          </button>

          <h2>Ingredients</h2>
          <ul className="ingredient-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={`${ingredient}-${index}`}>{ingredient}</li>
            ))}
          </ul>

          <h2>Cooking Instructions</h2>
          <p className="instructions">{recipe.instructions}</p>
        </div>
      </div>
    </main>
  );
}

export default RecipeDetails;

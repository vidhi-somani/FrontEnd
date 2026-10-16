
import { Link } from "react-router-dom";
import { useRecipes } from "../context/RecipeContext";

function RecipeCard({ recipe }) {
  const { favorites, toggleFavorite } = useRecipes();

  const isFavorite = favorites.includes(recipe.id);

  return (
    <article className="recipe-card">
      <img
        className="recipe-image"
        src={recipe.image}
        alt={recipe.title}
      />

      <div className="recipe-card-content">
        <span className="category">{recipe.category}</span>

        <h3>{recipe.title}</h3>

        <p>⏱ {recipe.time}</p>

        <div className="card-actions">
          <Link to={`/recipe/${recipe.id}`} className="view-button">
            View Recipe
          </Link>

          <button
            className={`favorite-button ${isFavorite ? "active" : ""}`}
            onClick={() => toggleFavorite(recipe.id)}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {isFavorite ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;


import RecipeCard from "../Components/RecipeCard";
import { useRecipes } from "../context/RecipeContext";

function Favorites() {
  const { recipes, favorites } = useRecipes();

  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id)
  );

  return (
    <main className="page-container">
      <section className="page-heading">
        <p className="eyebrow">YOUR COLLECTION</p>
        <h1>My Favorite Recipes ♥</h1>
        <p>All the delicious dishes you have saved in one place.</p>
      </section>

      {favoriteRecipes.length > 0 ? (
        <div className="recipe-grid">
          {favoriteRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No favorites yet!</h2>
          <p>
            Click the heart on any recipe card to save it here.
          </p>
        </div>
      )}
    </main>
  );
}

export default Favorites;

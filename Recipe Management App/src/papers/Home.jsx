
import { useState } from "react";
import RecipeCard from "../Components/RecipeCard";
import { useRecipes } from "../context/RecipeContext";

function Home() {
  const { recipes } = useRecipes();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(recipes.map((recipe) => recipe.category)),
  ];

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || recipe.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="page-container">
      <section className="hero">
        <p className="eyebrow">YOUR PERSONAL COOKBOOK</p>
        <h1>Discover Your Next Favorite Recipe</h1>
        <p>
          Find inspiration, save your favorites, and bring delicious
          ideas to your kitchen.
        </p>
      </section>

      <section className="recipes-section">
        <div className="section-heading">
          <div>
            <h2>Explore Recipes</h2>
            <p>Something delicious is waiting for you.</p>
          </div>

          <span className="recipe-count">
            {filteredRecipes.length} recipes
          </span>
        </div>

        <input
          className="search-input"
          type="search"
          placeholder="Search recipes..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="category-filters">
          {categories.map((item) => (
            <button
              key={item}
              className={`filter-button ${
                category === item ? "selected" : ""
              }`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {filteredRecipes.length > 0 ? (
          <div className="recipe-grid">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <p className="empty-message">
            No recipes found. Try another search!
          </p>
        )}
      </section>
    </main>
  );
}

export default Home;

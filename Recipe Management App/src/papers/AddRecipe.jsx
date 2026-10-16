
import { useNavigate } from "react-router-dom";
import RecipeForm from "../Components/RecipeForm";
import { useRecipes } from "../context/RecipeContext";

function AddRecipe() {
  const { addRecipe } = useRecipes();
  const navigate = useNavigate();

  function handleAddRecipe(recipe) {
    addRecipe(recipe);
    navigate("/");
  }

  return (
    <main className="page-container form-page">
      <div className="form-heading">
        <p className="eyebrow">SHARE YOUR CREATION</p>
        <h1>Add a New Recipe</h1>
        <p>Save your favorite dish in your personal cookbook.</p>
      </div>

      <RecipeForm onAddRecipe={handleAddRecipe} />
    </main>
  );
}

export default AddRecipe;

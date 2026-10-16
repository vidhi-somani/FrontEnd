
import { useState } from "react";

function RecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Indian");
  const [time, setTime] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newRecipe = {
      id: crypto.randomUUID(),
      title: title.trim(),
      category,
      time: time.trim(),
      image:
        image.trim() ||
        "https://images.unsplash.com/photo-1547592180-85f173990554?w=700",
      ingredients: ingredients
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      instructions: instructions.trim(),
    };

    onAddRecipe(newRecipe);
  }

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <label>Recipe Name</label>
      <input
        type="text"
        placeholder="e.g. Paneer Butter Masala"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />

      <label>Category</label>
      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option>Indian</option>
        <option>Italian</option>
        <option>Chinese</option>
        <option>Breakfast</option>
        <option>Dessert</option>
        <option>Healthy</option>
        <option>Snacks</option>
        <option>Other</option>
      </select>

      <label>Cooking Time</label>
      <input
        type="text"
        placeholder="e.g. 30 mins"
        value={time}
        onChange={(event) => setTime(event.target.value)}
        required
      />

      <label>Image URL (optional)</label>
      <input
        type="url"
        placeholder="Paste an image URL"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />

      <label>Ingredients</label>
      <textarea
        placeholder="Paneer, tomatoes, butter, cream..."
        value={ingredients}
        onChange={(event) => setIngredients(event.target.value)}
        required
        rows="4"
      />

      <p className="form-hint">Separate ingredients with commas.</p>

      <label>Cooking Instructions</label>
      <textarea
        placeholder="Write the cooking steps here..."
        value={instructions}
        onChange={(event) => setInstructions(event.target.value)}
        required
        rows="5"
      />

      <button type="submit" className="primary-button">
        Add Recipe
      </button>
    </form>
  );
}

export default RecipeForm;


import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./papers/Home";
import AddRecipe from "./papers/AddRecipe";
import Favorites from "./papers/Favorites";
import RecipeDetails from "./papers/RecipeDetails";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <footer className="footer">
        <p>Made with ♥ for food lovers | RecipeBook</p>
      </footer>
    </>
  );
}

export default App;

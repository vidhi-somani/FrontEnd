
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="brand">
        🍲 RecipeBook
      </NavLink>

      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/add-recipe">
          Add Recipe
        </NavLink>
        <NavLink to="/favorites">
          Favorites
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

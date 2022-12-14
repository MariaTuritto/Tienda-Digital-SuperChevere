import { Link, Outlet } from "react-router-dom";
import "./Categories.css";

export default function Categories() {
  return (
    <div className="categoriesContainer" area="content">
      <div className="title">Productos</div>
      <div className="links">
        <Link to="Almacen">Almacen</Link>
        <Link to="Lacteos">Lacteos</Link>
      </div>
      <Outlet />
    </div>
  );
}
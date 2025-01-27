import React from "react";
import { ROUTES } from "../routes/paths";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  /**
   * Nav link se utiliza para movernos entre rutas
   * Navlink añade "actove" a className cuando la ruta es la actual (v7 de router dom)
   * isActive --> es una prop de ract router dom que me dice si la ruta esta activa
   *
   */
  return (
    <nav className="bg-gradient-to-tr from-rose-500 to-pink-500 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="space-x-4">
          <NavLink
            className={(isActive) =>
              `text-white text-3xl hover:text-red-600 ${
                isActive ? "font-bold" : ""
              }`
            }
            to={ROUTES.HOME}
          >
            Inicio APP
          </NavLink>
          <NavLink className="text-white text-3xl font-bold" to={ROUTES.SEARCH}>
            Buscar
          </NavLink>
          <NavLink
            className="text-white text-3xl font-bold"
            to={ROUTES.FAVORITES}
          >
            Favoritos
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

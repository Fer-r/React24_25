import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-sky-950 text-white shadow-lg mb-6">
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* Logo del videoclub */}
              <NavLink to="/login" className="text-xl font-bold py-8 ">
                Videoclub
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <p>
          {/* 
          @TODO
           */}
          todos los derechos reservador
        </p>
      </footer>
    </div>
  );
};

export default RootLayout;

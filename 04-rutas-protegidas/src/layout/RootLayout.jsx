import React from "react";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  const isAuth = localStorage.getItem("token") !== null;
  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex space-x-4">
                <Link to="/" className="text-xl font-bold">
                  Home
                </Link>
                <Link to="/profile" className="text-xl font-bold">
                  Profile
                </Link>
                <Link to="/dashboard" className="text-xl font-bold">
                  Dashboard
                </Link>
              </div>
              {isAuth && (
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800 hover:shadow-2xl">
                  Cerrar session
                </button>
              )}
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;

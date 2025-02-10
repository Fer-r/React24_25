import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminLayout = () => {
  const { logout } = useAuth();
  return (
    <div className="flex h-screen">
      {/* Sidebar de movil */}
      <div className="lg:hidden "></div>
      {/* Aside lateral */}
      <div>
        <aside className="fixed lg:static w-64 bg-gray-800 h-full lg:block transform transition-transform flex-col">
          <nav className="flex-1 p-4 space-y-2">
            <NavLink
              to="/admin"
              className="block p-2 text-white hover:text-amber-700"
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/admin/users"
              className="block p-2 text-white hover:text-amber-700"
            >
              Users
            </NavLink>
            <NavLink
              to="/admin/products"
              className="block p-2 text-white hover:text-amber-700"
            >
              Products
            </NavLink>
            <NavLink
              to="/admin/settings"
              className="block p-2 text-white hover:text-amber-700"
            >
              Settings
            </NavLink>
          </nav>
          <div className="p-4 border-t border-gray-700">
            <button className="bg-red-500">Logout</button>
          </div>
        </aside>
      </div>
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

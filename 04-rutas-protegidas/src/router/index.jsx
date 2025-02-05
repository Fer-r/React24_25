import { createBrowserRouter, useNavigate, Navigate } from "react-router-dom";

import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

const ProtectedRoute = () => {
  const navigate = useNavigate();
  // Debe impedir el acceso al profile a no ser que no tenga un token guardado en localstorage
  if (!isAuthenticated()) {
    return <Navigate to="/" replace={true} />;
  }
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />,
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

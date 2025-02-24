import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import RootLayout from "./../layout/RootLayout";
import ErrorPage from "./../pages/ErrorPage";
import Register from "./../pages/Register";
import ProductDetail from "./../pages/ProductDetail";
import Products from "./../pages/Products";
import ProtectedRoute from "../components/ProtectedRoute";
import ProductPage from "../pages/ProductPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
      {
        path: "products/create",
        element: (
          <ProtectedRoute>
            <ProductPage action="create" />
          </ProtectedRoute>
        ),
      },
      {
        path: "products/:id/edit",
        element: (
          <ProtectedRoute>
            <ProductPage action="edit" />
          </ProtectedRoute>
        ),
      },
      {
        path: "products/:id/delete",
        element: (
          <ProtectedRoute>
            <ProductPage action="delete" />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

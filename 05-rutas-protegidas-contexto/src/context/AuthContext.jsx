import { createContext, useContext, useState } from "react";

// Creo el contexto
const AuthContext = createContext();

// creo el provider
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Hacer login

  // Hacer logout

  // Simulo el login si existe un token en el localStorage con valor true
  // entonces el usuario esta logueado

  const login = () => {
    if (JSON.parse(localStorage.getItem("token")) === true || "") {
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    localStorage.setItem("token", JSON.stringify(false));
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Creo un hook personalizado para exportar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

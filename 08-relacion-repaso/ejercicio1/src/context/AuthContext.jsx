import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkAuth();
  }, []);
  /**
   * Funcion para verificar si el usuario esta logueado porque existe el token en el localstorage
   */
  const checkAuth = () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        // Para decodificar el token y hacer uso si es necesario
        setIsLogin(true);
      }
    } catch (error) {
        console.error(error.message)
        setError(error)
    }finally{
        setIsLoading(false)
    }
  };

  const value = { user,isLoading };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

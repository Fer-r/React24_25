import React from "react";
const handleLogin = () => {
  localStorage.setItem("token", JSON.stringify("hola mundo"));
};
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};
const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-8">Bienvenido</h1>
      {!isAuthenticated ? (
        <button className="bg-blue-500 text-white" onClick={handleLogin}>
          Iniciar sesion
        </button>
      ) : (
        <button className="bg-red-500 text-white" onClick={handleLogin}>
          Iniciar sesion
        </button>
      )}
    </div>
  );
};

export default Home;

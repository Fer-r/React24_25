import { useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from './routes/Router';

function App() {
  // Cuando usemos react router din Aoo siki deberua teber ek router provider
  // El resto de cosas deberian de estar en RootLayout
  return <RouterProvider router={router} />;
}

export default App;

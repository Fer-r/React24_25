import { useState } from "react";
import Contador from "./components/Contador";
import ContadorDoble from "./components/ContadorDoble";
import Hijo from "./components/parametros/hijo";
import Padre from "./components/parametros/padre";
import Saludo from "./components/useEffect/Saludo";
import ProductList from "./components/useEffectFetching/ProductList";
const initialStateInfo = { nombre: "Fernando", edad: 15, isAdmin: false };
const App = () => {
  const [info, setInfo] = useState(initialStateInfo);
  const handleClickEdad = () => {
    setInfo((prevInfo) => ({ ...prevInfo, edad: prevInfo.edad + 1 }));
  };
  return (
    <>
      {/* <Padre info={info} setInfo={setInfo} {...handleClickEdad}>
        <h1>Hola mundo</h1>
        <Hijo info={info} handleClickEdad={handleClickEdad} />
      </Padre>
      <h1>Edad: {info.edad}</h1>
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Ejemplos de componenetes y estados en React
        </h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Contador Simple
          </h2>
          <Contador />
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Contador Doble
          </h2>
          <ContadorDoble />
        </div>
      </div> */}

      <Saludo />
      <ProductList />
    </>
  );
};

export default App;

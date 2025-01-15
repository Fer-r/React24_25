import React, { useEffect, useState } from "react";

const Saludo = () => {
  const [edad, setEdad] = useState(0);
  const [sexo, setSexo] = useState("M");
  // useEffect(() => {
  //     console.log("Renderizando al montar el componente y cuando se actualiza el componente saludo");

  //     return () => {
  //       //   second;
  //     };
  //   },);
  //   useEffect(() => {
  //     console.log("Renderizando solo al montar el componente");

  //     return () => {
  //       //   second;
  //     };
  //   }[]);

  useEffect(() => {
    console.log(
      "Renderizando al montar el componente y cuando se actualice el estado sexo"
    );

    return () => {
      //   second;
    };
  }, [sexo]);

  const handleClickEdad = () => {
    setEdad((prevEdad) => prevEdad + 1);
  };
  const handleClickSexo = () => {
    setSexo((prevSexo) => (prevSexo === "M" ? "F" : "M"));
  };
  return (
    <>
      <p>Tu edad: {edad}</p>
      <p>Sexo: {sexo}</p>
      <button onClick={handleClickEdad}>Aumentar Edad</button>
      <button onClick={handleClickSexo}>Cambiar Sexo</button>
    </>
  );
};

export default Saludo;

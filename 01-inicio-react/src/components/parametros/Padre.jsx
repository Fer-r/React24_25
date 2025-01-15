import React, { useState } from "react";

const Padre = (params) => {
  //   const [admin, setAdmin] = useState(isAdmin);
  let { info, setInfo, children,handleClickEdad } = params;
  console.log(info.nombre, info.edad);
  console.log(children);
  const handleClick = () => {
    setInfo({ ...info, nombre: "Pedro" });
    // info.isAdmin = !isAdmin;
    // console.log(isAdmin);
  };
  return (
    <>
      <section>
        <h2>Bienvenido {info.nombre}</h2>
        <p>Edad: {info.edad}</p>
        {info.isAdmin && <p>Administrador</p>}
        <div>
          <button onClick={handleClick}>Modificar</button>
          <button onClick={handleClickEdad}>Edad</button>
        </div>
      </section>
      <section>{children}</section>
    </>
  );
};

export default Padre;

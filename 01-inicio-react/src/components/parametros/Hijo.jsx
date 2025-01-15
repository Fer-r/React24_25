import React from "react";

function Hijo(props) {
  const { info,setInfo } = props;
  return (
    <>
      <div>Eres hijo de {info.nombre}</div>
    </>
  );
}

export default Hijo;

import { useEffect, useState } from "react";

const ContadorDoble = () => {
  // Hooks
  const [friends, setFriends] = useState({
    Juan: 0,
    Carlos: 0,
    Maria: 0,
  });
  const [media, setMedia] = useState();
  // Crear una etiqueta p que me haga la media aritmetica del numero de likes que tienen entre todos
  //   Visto en https://stackoverflow.com/questions/56247433/how-to-use-setstate-callback-on-react-hooks
  useEffect(() => {
    setMedia(
      () =>
        Object.values(friends).reduce((acc, likes) => (acc += likes), 0) /
        Object.keys(friends).length
    );
  }, [friends]);
  // Variables

  // Funciones
  function handleClickLike(nombre, likes) {
    setFriends((preValue) => ({
      ...preValue,
      [nombre]: preValue[nombre] + likes,
    }));

    // setMedia(
    //   () =>
    //     Object.values(friends).reduce((acc, likes) => (acc += likes), 0) /
    //     Object.keys(friends).length
    // );
  }
  return (
    <div className="max-w-sm mx-auto mt-8 p-6 bg-gray-200 shadow-sm rounded-md">
      <h1 className="text-2xl font-bold bm-5 text-center">
        Contador de Likes de mis amigos
      </h1>
      <div className="text-center mt-4">
        <span>
          Juan: tiene <strong>{friends.Juan}</strong> likes
        </span>
        <div className="mt-4 flex justify-center gap-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            onClick={() => {
              handleClickLike("Juan", 1);
            }}
          >
            Like
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
            onClick={() => {
              handleClickLike("Juan", -1);
            }}
          >
            Dislike
          </button>
        </div>
      </div>
      <div className="text-center mt-4">
        <span>
          Maria: tiene <strong>{friends.Maria}</strong> likes
        </span>
        <div className="mt-4 flex justify-center gap-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            onClick={() => {
              handleClickLike("Maria", 1);
            }}
          >
            Like
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
            onClick={() => {
              handleClickLike("Maria", -1);
            }}
          >
            Dislike
          </button>
        </div>
      </div>
      <p className="text-center mt-4">Media: {media}</p>
    </div>
  );
};

export default ContadorDoble;

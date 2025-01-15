import carrito from "../../assets/1413908.png";
const ButtonProduct = (props) => {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.children}
    </button>
  );
};

export default ButtonProduct;

import "./Button.css";

const Button = ({
  children,
  w100 = false,
  bgColor = "green",
  color = "white",
  className,
  type,
  onClick,
  innerRef,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      ref={innerRef}
      className={`btn bg${bgColor} t${color} ${className} ${
        w100 ? "button-max-width" : ""
      }`}>
      {children}
    </button>
  );
};

export default Button;

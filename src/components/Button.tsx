import"../App.css"
type ButtonProps = {
  onClick: () => void;
};

const Button = ({ onClick }: ButtonProps) => {
  return <div className="button" onClick={onClick}>result</div>;
};

export default Button;

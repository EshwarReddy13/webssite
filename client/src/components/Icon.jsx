import "./Icon.css";

const Icon = ({ src, alt, onClick }) => {
  return <img className="icon" src={src} alt={alt} onClick={onClick} />;
};

export default Icon;

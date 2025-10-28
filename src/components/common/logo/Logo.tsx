import { Link } from "react-router-dom";
interface logoProps {
  logo?: string;
}

const Logo: React.FC<logoProps> = ({ logo }) => {
  return (
    <Link to="/" className="shrink-0">
      <img
        alt="Ministry of Sports logo"
        src={logo ? logo : "/assets/logo.png"}
        className="h-[50px] w-auto object-contain"
      />
    </Link>
  );
};

export default Logo;

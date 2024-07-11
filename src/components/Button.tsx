import { Link } from "react-router-dom";

interface buttonData {
  text: string;
  link: string;
}

const Button = ({ text, link }: buttonData) => {
  return (
    <>
      <Link className="px-16 sm:px-32 py-2 bg-white text-black" to={link}>
        {text}
      </Link>
    </>
  );
};

export default Button;

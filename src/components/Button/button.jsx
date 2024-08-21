import { Link } from "react-router-dom";
import "../Button/button.css";

export function Button({ text, link }) {
  return link ? (
    <Link to={link} className="button">
      {text}
    </Link>
  ) : (
    <button className="button" type="submit">
      {text}
    </button>
  );
}

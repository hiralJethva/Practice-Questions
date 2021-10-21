import "./styles.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
      <Link className="nav-item" to="/">
        Home
      </Link>
      <Link className="nav-item" to="/questions">
        Questions
      </Link>
      <Link className="nav-item" to="/intro">
        About Myself
      </Link>
    </nav>
  );
};

export default Navigation;

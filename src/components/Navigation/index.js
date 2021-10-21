import "./styles.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link className="nav-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/questions">
            Questions
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/intro">
            About Myself
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

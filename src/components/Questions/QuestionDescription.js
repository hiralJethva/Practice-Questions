import "./styles.css";
import { Link } from "react-router-dom";

const QuestionDescription = ({ title, description }) => {
  return (
    <div className="question-description">
      <Link to="/questions">...Back</Link>
      <h4 className="question-title">{title}</h4>
      <hr />
      <h4>Description</h4>
      {description}
      <hr />
    </div>
  );
};

export default QuestionDescription;

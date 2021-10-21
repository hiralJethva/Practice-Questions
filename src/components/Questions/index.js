import { Link } from "react-router-dom";
import "./styles.css";

const sampleQuestions = [
  {
    question: "Math Operations",
    path: "/math-operations"
  },
  {
    question: "Change size/color",
    path: "/change-size-color"
  },
  {
    question: "Button Loader",
    path: "/button-loader"
  },
  {
    question: "Password Checker",
    path: "/password-checker"
  },
  {
    question: "CSS Color Variables",
    path: "/css-color-variables"
  },
  {
    question: "Find out Age/Power",
    path: "/check-age-power"
  }
];
const QuestionItem = ({ question, description, path }) => {
  return (
    <div className="question-item">
      <Link to={path}>
        <h4>{question}</h4>
      </Link>
    </div>
  );
};

const Questions = () => {
  return (
    <>
      <h4>List of Sample Questions</h4>
      <ol>
        {sampleQuestions.map((i, idx) => (
          <li key={`${i.path}${idx}`}>
            <QuestionItem question={i.question} path={i.path} />
          </li>
        ))}
      </ol>
    </>
  );
};
export default Questions;

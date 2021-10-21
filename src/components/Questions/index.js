import { Link } from "react-router-dom";
import "./styles.css";

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
        <li>
          <QuestionItem question="Math Operations" path="/math-operations" />
        </li>
        <li>
          <QuestionItem
            question="Change size/color"
            path="/change-size-color"
          />
          Create a web app where I can input a text. Now create two buttons +
          and -. On clicking + increase the fontSize by 2px and vice versa.
        </li>
        <li>
          Create a web app where I can input a text. Now, create three buttons
          h1, h2, h3. When I click on any of the button, the text should become
          h1, h2, or h3.
        </li>
        <li>
          Create a web app where I can input a text. Now, create three buttons:
          red, green, blue. Clicking on the button should change the text color.
        </li>
      </ol>
    </>
  );
};
export default Questions;

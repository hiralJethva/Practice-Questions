import QuestionDescription from "./QuestionDescription";
import "./styles.css";

const CSSColorVariables = () => {
  return (
    <div>
      <div className="question-description">
        <QuestionDescription
          title="CSS Color Variables"
          description="Create color variables in CSS. Two colors: primary and secondary. Now make your h1 of primary color, h2 of secondary color. Make two buttons, primary and secondary using the same color. Can you also set a font from Google Font?"
        />
      </div>
    </div>
  );
};

export default CSSColorVariables;

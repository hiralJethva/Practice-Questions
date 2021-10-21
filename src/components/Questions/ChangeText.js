import QuestionDescription from "./QuestionDescription";
import "./styles.css";

const ChangeText = () => {
  return (
    <div>
      <div className="question-description">
        <QuestionDescription
          title="Change Text size/color"
          description={
            <ol>
              <li>
                <p>
                  Create a web app where I can input a text. Now create two
                  buttons + and -. On clicking + increase the fontSize by 2px
                  and vice versa.
                </p>
              </li>
              <li>
                <p>
                  Create a web app where I can input a text. Now, create three
                  buttons: red, green, blue. Clicking on the button should
                  change the text color.
                </p>
              </li>
            </ol>
          }
        />
      </div>
    </div>
  );
};
export default ChangeText;

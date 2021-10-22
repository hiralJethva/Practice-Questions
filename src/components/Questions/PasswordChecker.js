import { useState } from "react";
import QuestionDescription from "./QuestionDescription";
import "./styles.css";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorStyle, setErrorStyle] = useState({});
  const validatePassword = () => {
    if (password.length < 10) {
      setError("Password should be of min. 10 Characters");
      setErrorStyle({
        color: "red",
        fontSize: "9px"
      });
    } else {
      setError("Success!!");
      setErrorStyle({
        color: "green"
      });
    }
  };
  return (
    <div>
      <QuestionDescription
        title="Password Checker"
        description="Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success. Someone can ask to make the submit button disabled. Some can ask to make the input field green or red depending on input."
      />
      <div className="question-item">
        <h3>
          {" "}
          Enter Password : {""}
          <span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorStyle({});
                setError("");
              }}
            />
            {"  "}
            {error && (
              <p style={{ display: "inline", ...errorStyle }}>{error}</p>
            )}
          </span>
        </h3>
        <button onClick={validatePassword}>Validate Password</button>
      </div>
    </div>
  );
};
export default PasswordChecker;

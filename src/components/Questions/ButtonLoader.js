import QuestionDescription from "./QuestionDescription";
import { useState } from "react";
import "./styles.css";

const ButtonLoader = () => {
  const [loader, setLoader] = useState(true);
  const [text, setText] = useState("Downloading in progress...");
  return (
    <div>
      <div>
        <QuestionDescription
          title="Button Loader"
          description="Create a web app with a button loded. Show a text loading... on a web app. However, hide it if I click on the button loaded."
        />
      </div>
      <div className="question-item">
        {loader && (
          <>
            <p>{text}</p>
            <button
              onClick={() => {
                setLoader(false);
                setText("Dowloaded !!");
              }}
            >
              Stop Loading
            </button>
          </>
        )}
        {!loader && (
          <button
            onClick={() => {
              setLoader(true);
              setText("Downloading in progress...");
            }}
          >
            Start Loading
          </button>
        )}
      </div>
    </div>
  );
};

export default ButtonLoader;

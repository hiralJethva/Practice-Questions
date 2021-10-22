import { useState } from "react";
import QuestionDescription from "./QuestionDescription";
import "./styles.css";

const ChangeText = () => {
  const [text, setText] = useState("");
  const [size, setSize] = useState(12);
  const [color, setColor] = useState("black");
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
      <div className="question-item">
        <h3>
          Enter Text :{" "}
          <span>
            <input
              name="text"
              value={text}
              style={{
                padding: "5px"
              }}
              onChange={(e) => setText(e.target.value)}
            />
          </span>
        </h3>
        <h3>
          Updated Text :{" "}
          <span
            style={{
              color,
              fontSize: size,
              border: "none",
              borderBottom: "2px dashed orange"
            }}
          >
            {text}
          </span>
        </h3>
        <div>
          <h3>
            Choose color :{" "}
            <span>
              <button onClick={() => setColor("red")}>Red</button>
              <button onClick={() => setColor("blue")}>Blue</button>
              <button onClick={() => setColor("Green")}>Green</button>
              <button onClick={() => setColor("black")}>Reset</button>
            </span>
          </h3>
          <h3>
            Change Size :{" "}
            <span>
              <button
                onClick={() => {
                  const updatedSize = size + 2;
                  setSize(updatedSize);
                }}
              >
                Increase
              </button>
              <button
                onClick={() => {
                  let updatedSize = size - 2;
                  if (updatedSize < 10) {
                    updatedSize = 10;
                  }
                  setSize(updatedSize);
                }}
              >
                Decrease
              </button>
              <p style={{ display: "inline", fontSize: "8px" }}>
                {" "}
                (Min. Height can be 10)
              </p>
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};
export default ChangeText;

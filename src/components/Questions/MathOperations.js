import React, { useState } from "react";
import QuestionDescription from "./QuestionDescription";
import "./styles.css";

const MathOperations = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState(0);
  return (
    <div>
      <QuestionDescription
        title="Math Operations"
        description="Create a web app which would take two inputs. It would also have 4
        buttons: +, -, x /. Based on the button clicked perform the operation
        on the two inputs. You can do this in React or vanillaJS based on your
        choice. Your time starts now."
      />
      <div className="question-item">
        <h6>
          Enter Input 1:{" "}
          <span>
            <input
              name="input1"
              type="number"
              value={input1}
              onChange={(e) => setInput1(parseInt(e.target.value, 10))}
            />
          </span>
        </h6>
        <h6>
          Enter Input 1:{" "}
          <span>
            <input
              name="input1"
              type="number"
              value={input2}
              onChange={(e) => setInput2(parseInt(e.target.value, 10))}
            />
          </span>{" "}
        </h6>
        <h6 style={{ display: "inline" }}>Select Your operation</h6>
        <button onClick={() => setResult(input1 + input2)}>+</button>
        <button onClick={() => setResult(input1 - input2)}>-</button>
        <button onClick={() => setResult(input1 * input2)}>X</button>
        <button onClick={() => setResult(input1 / input2)}>/</button>
        <h6>Result: {result}</h6>
      </div>
    </div>
  );
};
export default MathOperations;

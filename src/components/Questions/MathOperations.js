import React, { useState } from "react";
import QuestionDescription from "./QuestionDescription";
import "./styles.css";

const MathOperations = () => {
  const result = "";
  return (
    <div className="math-operation">
      <QuestionDescription
        title="Math Operations"
        description="Create a web app which would take two inputs. It would also have 4
        buttons: +, -, x /. Based on the button clicked perform the operation
        on the two inputs. You can do this in React or vanillaJS based on your
        choice. Your time starts now."
      />
      <h6>
        Enter Input 1:{" "}
        <span>
          <input name="input1" value={""} />
        </span>
      </h6>
      <h6>
        Enter Input 1:{" "}
        <span>
          <input name="input1" value={""} />
        </span>{" "}
      </h6>
      <h6 style={{ display: "inline" }}>Select Your operation</h6>
      <button>+</button>
      <button>-</button>
      <button>X</button>
      <button>/</button>
      <h6>Result: {result}</h6>
    </div>
  );
};
export default MathOperations;

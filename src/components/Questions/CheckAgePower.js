import { useState } from "react";
import QuestionDescription from "./QuestionDescription";
import "./styles.css";

const CheckAgePower = () => {
  const [lords, setLords] = useState([]);
  const [lord, setLord] = useState({
    name: "",
    age: 0,
    power: 0
  });
  const handleLord = (e) => {
    const { name, value } = e.target;
    const updatedData = {
      ...lord
    };
    updatedData[name] = value;
    setLord(updatedData);
  };
  return (
    <div>
      <div className="question-description">
        <QuestionDescription
          title="Find out Age/Power"
          description={
            <ol>
              <li>
                <p>
                  Create two objects with name, age, and yuga as Ram, 25, Treta.
                  Krishna, 31, Dwapar. Write a function which takes two objects
                  and return the person with more age.
                </p>
              </li>
              <li>
                <p>
                  Create two objects with name, age, and power as Ram, 2500,
                  Treta. Krishna, 2325, Dwapar Write a function which takes two
                  objects and return the person with more power.
                </p>
              </li>
              <li>
                Create two objects with name, age, and power as Ram, 2500,
                Treta. Krishna, 2325, Dwapar. Say if every character in name is
                worth 35 power points. Write a function which takes two objects
                and return the person with more power based on their name and
                power both.
              </li>
            </ol>
          }
        />
      </div>
      <div className="question-item">
        <div>
          <h3>
            Enter Name: {""}
            <span>
              <input
                type="text"
                name="name"
                value={lord.name}
                onChange={handleLord}
              />
            </span>
          </h3>
          <h3>
            Enter Age: {""}
            <span>
              <input
                type="number"
                name="age"
                value={lord.age}
                onChange={handleLord}
              />
            </span>
          </h3>
          <h3>
            Enter Power: {""}
            <span>
              <input
                type="number"
                name="power"
                value={lord.power}
                onChange={handleLord}
              />
            </span>
          </h3>
          <button
            onClick={() => {
              const updatedLords = [...lords, lord];
              setLords(updatedLords);
            }}
          >
            Add Lord
          </button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Power</td>
              </tr>
            </thead>
            <tbody>
              {lords.map((i, idx) => {
                return (
                  <tr key={`${i.name}${idx}`}>
                    <td>{i.name}</td>
                    <td>{i.age}</td>
                    <td>{i.power}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CheckAgePower;

import { useState } from "react";

const FontSize = () => {
  const [size, setSize] = useState(10);
  const [color, setColor] = useState("black");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <h3>Text loading...</h3>}

      <h3> Enter your text : </h3>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <h3>Your Text: </h3>
      <p style={{ fontSize: `${size}px`, color }}>{text}</p>
      <div>
        <h5 style={{ display: "inline" }}>Change Size</h5>
        <button onClick={() => setSize(size + 2)}>+</button>
        <button onClick={() => setSize(size - 2)}>-</button>
        <button onClick={() => setSize(10)}>Reset</button>
      </div>
      <div>
        <h5 style={{ display: "inline" }}>Change color</h5>
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("blue")}>Blue</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("black")}>Reset</button>
      </div>
    </>
  );
};
export default FontSize;

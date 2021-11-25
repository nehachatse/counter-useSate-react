import "./styles.css";
import { useState } from "react";
import Button from "./Button.jsx";

export default function App() {
  const [count, setCount] = useState(0);
  const handleIncDec = (value) => {
    setCount(count + value);
  };
  const handleMul = () => {
    setCount(count * 2);
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <Button op="-" handleclick={() => handleIncDec(-1)} />
      <Button op="+" handleclick={() => handleIncDec(1)} />
      <Button op="x2" handleclick={() => handleMul()} />
    </div>
  );
}

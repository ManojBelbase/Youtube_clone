import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p className="text-2xl font-black">
          Hello world welcome to the youtube clone
        </p>
      </div>
    </>
  );
}

export default App;
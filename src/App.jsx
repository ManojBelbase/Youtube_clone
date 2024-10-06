import { useState } from "react";
import "./App.css";
import Navbar from "./components/shared_components/Navbar";
import Sidebar from "./components/shared_components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Sidebar />
      </div>
    </>
  );
}

export default App;

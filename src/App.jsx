import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import VideoPlaying from "./pages/VideoPlaying";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search/:searchQuery" element={<Search />} />
          <Route path="/video/:id" element={<VideoPlaying />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

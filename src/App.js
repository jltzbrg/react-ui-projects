import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Projects/Home";
import Rotated from "./Projects/Rotated";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/rotated" element={<Rotated />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

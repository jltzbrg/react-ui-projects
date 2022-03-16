import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Projects/Home";
import Rotated from "./Projects/Rotated";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1500,
});

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

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Projects/Home";
import Rotated from "./Projects/Rotated";
import Glowing from "./Projects/Glowing";
import Marketing from "./Projects/Marketing";
import Colors from "./Projects/Colors";
import ParallaxEffect from "./Projects/Parallax";
import CoffieShop from "./Projects/Coffieshop";
import Cars from "./Projects/Cars";
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
          <Route path="/glowing" element={<Glowing />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/parallax" element={<ParallaxEffect />} />
          <Route path="/coffieshop" element={<CoffieShop />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Price from "./Pages/Price";
import Projects from "./Pages/Projects";
import Vision from "./Pages/Vision";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="price" element={<Price />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="vision" element={<Vision />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

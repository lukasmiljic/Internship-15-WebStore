import Home from "./Pages/Home/Home.jsx";
import Products from "./Pages/Products/Products.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/search" element={<Products />} />
        <Route path="/search/:search" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;

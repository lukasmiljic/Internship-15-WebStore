import Home from "./Pages/Home/Home.jsx";
import Products from "./Components/ProductList/ProductList.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Products />} />
        <Route path="/search/:search" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;

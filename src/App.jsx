import Home from "./Pages/Home/Home.jsx";
import Products from "./Pages/Products/Products.jsx";
import PageNotFound from "./Pages/PageNotFound/PageNotFound.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Products />} />
        <Route path="/search/:search" element={<Products />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import Explore from "./pages/Explore";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/category/:categoryName" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

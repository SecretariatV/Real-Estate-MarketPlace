import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import Explore from "./pages/Explore";
import Listings from "./pages/Listings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route
            path="/category/:categoryName/:listingId"
            element={<Listings />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

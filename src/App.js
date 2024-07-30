import "./App.css";
import "./micro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
// =================================================
import Home from "./pages/Home";
import Product from "./pages/Product";
import ShopCategory from "./pages/ShopCategory";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
// =================================================
import men_banner from "./assets/banner_mens.png";
import women_banner from "./assets/banner_women.png";
import kids_banner from "./assets/banner_kids.png";
// =================================================
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
      <Routes>
        {/* ------------------ */}
        <Route path="/" element={<Home />} />
        {/* ------------------ */}
        <Route
          path="/men"
          element={<ShopCategory banner={men_banner} category="men" />}
        />
        <Route path="/men/:id" element={<Product />} />
        {/* ------------------ */}
        <Route
          path="/women"
          element={<ShopCategory banner={women_banner} category="women" />}
        />
        <Route path="/women/:id" element={<Product />} />
        {/* ------------------ */}
        <Route
          path="/kids"
          element={<ShopCategory banner={kids_banner} category="kid" />}
        />
        <Route path="/kid/:id" element={<Product />} />
        {/* ------------------ */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        {/* ------------------ */}
      </Routes>
    </>
  );
}

export default App;

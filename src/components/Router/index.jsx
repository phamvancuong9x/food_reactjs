import { Route, Routes } from "react-router-dom";
import Auth from "../../pages/Auth";
import Cart from "../../pages/Cart";
import CategoryProduct from "../../pages/CategoryProduct";
import DetailProduct from "../../pages/DetailProduct";
import HomePage from "../../pages/Home";
import Introduce from "../../pages/Introduce";
import News from "../../pages/News";
import NotFound from "../../pages/NotFound";
import Search from "../../pages/Search";

import ScrollToTop from "../ScrollToTop";
function Routers() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category-product" element={<CategoryProduct />} />
        <Route path="/detail-product/:idProduct" element={<DetailProduct />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ScrollToTop>
  );
}

export default Routers;

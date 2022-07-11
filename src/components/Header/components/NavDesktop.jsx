import { memo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderTop from "./HeaderTop";
import { HeaderUser } from "./HeaderUser";
import { SearchInput } from "./SearchInput";

function NavDesktop({ total }) {
  const [showSearch, setShowSearch] = useState(false);

  const handleShowSearch = () => {
    setShowSearch(!showSearch);
  };
  const location = useLocation();

  return (
    <>
      <HeaderTop />
      <nav className="nav-desktop">
        <div className="nav__center">
          <ul className="nav__center-list">
            <li
              className={
                location.pathname === "/"
                  ? "nav__center-item nav__center-item_active"
                  : "nav__center-item"
              }
            >
              <Link to="/">Trang chủ</Link>
            </li>
            <li
              className={
                location.pathname === "/introduce"
                  ? "nav__center-item nav__center-item_active"
                  : "nav__center-item"
              }
            >
              <Link to="/introduce">Giới thiệu</Link>
            </li>
            <li
              className={
                location.pathname === "/category-product" ||
                location.pathname.includes("detail-product") === true
                  ? "nav__center-item nav__center-item_active"
                  : "nav__center-item"
              }
            >
              <Link to={"/category-product"}> Sản phẩm</Link>
            </li>
            <li
              className={
                location.pathname === "/news"
                  ? "nav__center-item nav__center-item_active"
                  : "nav__center-item"
              }
            >
              <Link to="/news">Tin Tức</Link>
            </li>
          </ul>
        </div>
        <ul className="nav__right-list">
          <li className="nav__right-item">
            <label htmlFor="nav__input-search">
              <div className="nav__search-title" onClick={handleShowSearch}>
                Tìm kiếm<i className="fas fa-search"></i>
              </div>
              <div
                className={
                  showSearch ? "nav__search showSubMenu" : "nav__search"
                }
              >
                <SearchInput />
              </div>
            </label>
          </li>
          <li className="nav__right-item header__cart">
            <Link className="cart" to="/cart">
              <i className="fas fa-shopping-basket "></i>
              <span>
                <span className="cart__number-product">({total || 0})</span>
                <span> </span>
              </span>
            </Link>
          </li>

          <HeaderUser />
        </ul>
      </nav>
    </>
  );
}

export default memo(NavDesktop);

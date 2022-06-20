import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderUser } from "./HeaderUser";
import { SearchInput } from "./SearchInput";

function MenuProduct() {
  return (
    <li className="nav-mobile__center-item nav-mobile__parent-menu">
      <div className="nav-mobile__parent-menu-title">
        <Link to="/category-product">Sản Phẩm </Link>
      </div>
    </li>
  );
}

function MenuBar({ showMenuBar, setShowMenuBar }) {
  const handleCloseMenuBar = () => {
    setShowMenuBar(!showMenuBar);
  };

  return (
    <div
      className={
        showMenuBar
          ? "menu-bars-container menu-bars-activity"
          : "menu-bars-container"
      }
    >
      <div className="menu-bars__close">
        <span>Menu</span>

        <i className="fas fa-times" onClick={handleCloseMenuBar}></i>
        {/* </div> */}
      </div>
      <label className="nav-mobile__search" htmlFor="nav-mobile__input-search">
        <div className={" showSubMenu"}>
          <SearchInput />
        </div>
      </label>
      <ul className="nav-mobile__center-list">
        <li
          className="nav-mobile__center-item typeProduct"
          data-type-product="categoryProductSale"
          data-is-sale="true"
        >
          <Link to="/introduce">Giới thiệu</Link>
        </li>

        <MenuProduct />

        <li className="nav-mobile__center-item">
          <Link to="/news"> Tin Tức </Link>
        </li>
        <HeaderUser text={"Tài Khoản"} />
      </ul>
    </div>
  );
}

function NavMobile({ total }) {
  const [showMenuBar, setShowMenuBar] = useState(false);
  const handleShowMenu = () => {
    setShowMenuBar(!showMenuBar);
  };
  return (
    <nav className="nav-mobile">
      <div className="nav-mobile__icon-cart header__cart">
        <Link className="cart" to="/cart">
          <i className="fas fa-shopping-basket "></i>
          <span>
            <span className="cart__number-product">({total || 0})</span>
            <span> </span>
          </span>
        </Link>
      </div>
      <div className="nav-mobile__logo nav__logo">
        <Link className="link-home" to="/">
          <div className="logo__image">
            <img
              src="https://api.luxwebsite.net/cuong_image/food_image/logo.png"
              alt="Image_logo"
            />
          </div>
        </Link>
      </div>
      <div className="nav-mobile__menu-bars">
        <div className="menu-bars__icon-bars" onClick={handleShowMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <MenuBar showMenuBar={showMenuBar} setShowMenuBar={setShowMenuBar} />
      </div>
    </nav>
  );
}

export default memo(NavMobile);

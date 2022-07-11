import React from "react";
import { CartRemove } from "./CartRemove";
import { stringToNumberMoney } from "./constant";
import { QuanTityProduct } from "./QuanTityProduct";

function CartItemMobile({ product }) {
  return (
    <div id={product.id} className="cart-tbody">
      <div className="cart-tbody__image" style={{ width: "30%" }}>
        <img src={product.image} alt="" className="cart-tbody__img" />
      </div>
      <div className="cart-tbody__info" style={{ width: "70%" }}>
        <div className="cart-tbody__name-mobile">
          <span>{product.nameProduct}</span>
        </div>
        <div className="d-flex">
          <div className="cart-tbody__price-mobile">
            {product.price_product}
          </div>
          <div className="cart-tbody__delete-mobile">
            <CartRemove product={product} />
          </div>
        </div>
        <div className="cart-tbody__form-mobile">
          <QuanTityProduct product={product} />
        </div>
      </div>
    </div>
  );
}
export default CartItemMobile;

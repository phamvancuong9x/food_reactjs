import React, { useState } from "react";
import BtnChangeQuantity from "../../DetailProduct/components/BtnChangeQuantity";
import { CartRemove } from "./CartRemove";
import { stringToNumberMoney } from "./constant";
import { QuanTityProduct } from "./QuanTityProduct";

function CartItem({ product }) {
  const [quantity, setQuantity] = useState(product.quantity);
  return (
    <div id={product.id} className="cart-tbody">
      <div className="cart-tbody__image" style={{ width: "17%" }}>
        <img src={product.image} alt="" className="cart-tbody__img" />
      </div>
      <div className="cart-tbody__name" style={{ width: "23%" }}>
        <span>{product.nameProduct}</span>
      </div>
      <div className="cart-tbody__price" style={{ width: "15%" }}>
        {product.price_product}
      </div>
      <div className="cart-tbody__form" style={{ width: "24%" }}>
        <QuanTityProduct product={product} />
      </div>
      <div className="cart-tbody__money" style={{ width: "15%" }}>
        {stringToNumberMoney(product.priceNumber * product.quantity)}
      </div>
      <div className="cart-tbody__delete" style={{ width: " 6%" }}>
        <CartRemove product={product} />
      </div>
    </div>
  );
}

export default CartItem;

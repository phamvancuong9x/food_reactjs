import React from "react";
import { CartSubmit } from "./CartContent";
import CartItem from "./CartItem";

export function CartDesktop({ ProductCartList, total_price }) {
  return (
    <div className="cart-page">
      <div className="cart-infor">
        <div className="cart-thead">
          <div className="cart-thead__title" style={{ width: "17%" }}>
            Ảnh sản phẩm
          </div>
          <div className="cart-thead__title" style={{ width: "23%" }}>
            Tên sản phẩm
          </div>
          <div className="cart-thead__title" style={{ width: "15%" }}>
            Đơn giá
          </div>
          <div className="cart-thead__title" style={{ width: "24%" }}>
            Số lượng
          </div>
          <div className="cart-thead__title" style={{ width: "15%" }}>
            Thành tiền
          </div>
          <div className="cart-thead__title" style={{ width: "6%" }}>
            Xoá
          </div>
        </div>
        <div className="cart__body-container">
          {ProductCartList?.map((product, i) => {
            return <CartItem key={i} product={product} />;
          })}
        </div>
        <CartSubmit total_price={total_price} />
      </div>
    </div>
  );
}

export default CartDesktop;

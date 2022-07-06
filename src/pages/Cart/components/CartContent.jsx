import React from "react";
import CartItem from "./CartItem";

function CartContent({ ProductCartList, total_price }) {
  return (
    <div className="grid wide">
      <div className="row">
        <div className="col l-12">
          <div className="header-cart">
            <div className="header-cart__title">
              <h1>Giỏ hàng của bạn</h1>
              <p className="con-lai"></p>
            </div>
          </div>
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
              <div className="cart-submit">
                <div className="total-money">
                  <div className="total-money-text">
                    {`Tổng tiền: ${total_price}`}
                  </div>
                  <div className="total-money-price"></div>
                </div>
                <button className="cart-submit-btn">
                  Tiến hành thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartContent;

import React from "react";
import CartDesktop from "./CartDesktop";
import CartItemMobile from "./CartItemMobile";

export function CartSubmit({ total_price }) {
  return (
    <div className="cart-submit">
      <div className="total-money">
        <div className="total-money-text">{`Tổng tiền: ${total_price}`}</div>
        <div className="total-money-price"></div>
      </div>
      <button className="cart-submit-btn">Tiến hành thanh toán</button>
    </div>
  );
}

function CartMobile({ ProductCartList, total_price }) {
  return (
    <div className="cart-mobile">
      <div className="cart-infor">
        <div className="cart-thead">
          <div className="cart-thead__title" style={{ width: "100%" }}>
            Sản phẩm
          </div>
        </div>
        <div className="cart__body-container">
          {ProductCartList?.map((product, i) => {
            return <CartItemMobile key={i} product={product} />;
          })}
        </div>
        <CartSubmit total_price={total_price} />
      </div>
    </div>
  );
}

function CartContent({ ProductCartList, total_price }) {
  return (
    <div className="grid">
      <div className="row">
        <div className="col l-12">
          <div className="header-cart">
            <div className="header-cart__title">
              <h1>Giỏ hàng của bạn</h1>
              <p className="con-lai"></p>
            </div>
            <CartDesktop
              ProductCartList={ProductCartList}
              total_price={total_price}
            />
            <CartMobile
              ProductCartList={ProductCartList}
              total_price={total_price}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartContent;

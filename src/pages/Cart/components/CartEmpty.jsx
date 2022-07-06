import React from "react";
import { Link } from "react-router-dom";

function CartEmpty() {
  return (
    <>
      <h1>Giỏ hàng của bạn</h1>
      <p className="con-lai"></p>

      <div class="cart-emty">
        Giỏ hàng rỗng, quay lại <Link to="/category-product">cửa hàng</Link> để
        tiếp tục mua sắm <i class="far fa-grin-hearts"></i>
      </div>
    </>
  );
}

export default CartEmpty;

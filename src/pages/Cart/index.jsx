import { useSelector } from "react-redux";
import { Success } from "../../components/Alert";
import Breadcrumbs from "../../components/Breadcrumbs";
import CartContent from "./components/CartContent";
import CartEmpty from "./components/CartEmpty";
import { stringToNumberMoney, totalPrice } from "./components/constant";
import "./styles.scss";

function Cart() {
  const ProductCartList = useSelector((state) => state.add_cart);
  const total_price = stringToNumberMoney(totalPrice(ProductCartList));
  const showNotifyDeleteProduct = useSelector(
    (state) => state.Cart.showNotifyDeleteProduct
  );

  if (ProductCartList.length === 0) {
    localStorage.setItem("cart", "[]");
  }
  return (
    <>
      <Breadcrumbs title={"Giỏ hàng"} />
      <div className="container">
        {ProductCartList.length === 0 ? (
          <CartEmpty />
        ) : (
          <CartContent
            ProductCartList={ProductCartList}
            total_price={total_price}
          />
        )}
        <div
          className={showNotifyDeleteProduct ? "alert active-alert" : "alert"}
        >
          <Success text={"Xóa thành công !"} />
        </div>
      </div>
    </>
  );
}

export default Cart;

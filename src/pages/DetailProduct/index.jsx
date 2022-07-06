import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import categoryApi from "../../api/categoryApi";
import Breadcrumbs from "../../components/Breadcrumbs";
import { checkProductCart } from "../../components/function/checkProductCart";
import Loading from "../../components/Loading";
import addToCartSlice from "../../redux/slice/addToCartSlice";
import NotFound from "../NotFound";
import BtnChangeQuantity from "./components/BtnChangeQuantity";
import DetailProductDescribe from "./components/DetailProductDescribe";
import DetailProductImage from "./components/DetailProductImage";
import "./styles.scss";
import { useSelector } from "react-redux";
import { addQuantityProductCart } from "../../components/function/addQuanityProductCart";
import alertSlice from "../../redux/slice/alertSlice";

function DetailProduct() {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const [isPage, setIsPage] = useState(true);
  const cartProductArray = useSelector((state) => state.add_cart);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    // if (loadingBtn) return;
    const productInfo = {
      id: product.id,
      nameProduct: product.name_product,
      image: product.imageProduct[1],
      price_product: product.price_product,
      priceNumber: product.priceNumber,
      quantity,
    };
    const action = addToCartSlice.actions.ADD_TO_CART(productInfo);
    dispatch(action);
    let newCartProduct;
    if (checkProductCart(cartProductArray, productInfo)) {
      newCartProduct = addQuantityProductCart(cartProductArray, productInfo);
    } else {
      newCartProduct = [...cartProductArray, productInfo];
    }

    localStorage.setItem("cart", JSON.stringify(newCartProduct));
    dispatch(
      alertSlice.actions.changeAlert({
        showAlert: true,
        alertContent: "Thêm vào giỏ hàng thành công !",
      })
    );
  };
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const product = await categoryApi.get(params.idProduct);
        setProduct(product);
        setTimeout(() => {
          setLoading(false);
        }, 200);
      } catch (error) {
        console.log("Failed to fetch product ", error);
        setIsPage(false);
      }
    })();
  }, [params.idProduct]);

  return (
    <>
      {isPage ? (
        <>
          <Breadcrumbs title={product?.name_product} />
          <div className="detail_content">
            {loading && <Loading />}
            <div className="grid wide">
              <div id="10" className="chi-tiet-sp">
                <div className="row">
                  <div className="col-12 l-6">
                    {product && (
                      <DetailProductImage imageList={product?.imageProduct} />
                    )}
                  </div>
                  <div className="col-12 l-6">
                    <div className="infor">
                      <h1 className="infor-title">{product?.name_product}</h1>
                      <div className="infor__price-box">
                        <span className="price-product">
                          {product?.price_product}
                        </span>
                        <span className="price-sale"></span>
                      </div>
                      <div className="price-summary">
                        <span className="price-summary__title">
                          mô tả ngắn:
                        </span>
                        <span className="price-summary__des">
                          (Đang cập nhật)
                        </span>
                      </div>
                      <form action="" className="price-form">
                        <div className="price-number">Số lượng:</div>
                        <BtnChangeQuantity
                          quantity={quantity}
                          setQuantity={setQuantity}
                        />
                      </form>
                      <div className="price-buy">
                        <button
                          type="submit"
                          className="price-buy-btn order"
                          style={{ marginRight: "15px" }}
                          onClick={handleAddToCart}
                        >
                          <span className="price-buy-text">
                            Thêm vào giỏ hàng
                          </span>
                        </button>
                        <button type="submit" className="price-buy-btn order">
                          <Link to={"/cart"} className="price-buy-text">
                            Mua ngay
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="menu-tap">
                  <div className="col l-12">
                    <div className="product-tap">
                      <ul className="tab-list">
                        <li className="tab-item active" data-target="#menu1">
                          mô tả sản phẩm
                        </li>
                        <li className="tab-item" data-target="#menu2">
                          tab tuỳ chỉnh
                        </li>
                        <li className="tab-item" data-target="#menu3">
                          hướng dẫn mua hàng
                        </li>
                      </ul>

                      <DetailProductDescribe
                        imageProduct={product?.imageProduct}
                        describe_1={product?.describe_1}
                        describe_2={product?.describe_2}
                      />
                      <div id="menu2" className="tab-content">
                        <p className="tab-text not-mg">
                          Nội dung tùy chỉnh viết ở đây
                        </p>
                      </div>
                      <div id="menu3" className="tab-content">
                        <p className="tab-text not-mg">Hướng dẫn mua hàng</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default DetailProduct;

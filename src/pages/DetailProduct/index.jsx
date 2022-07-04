import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import categoryApi from "../../api/categoryApi";
import Breadcrumbs from "../../components/Breadcrumbs";
import Loading from "../../components/Loading";
import NotFound from "../NotFound";
import DetailProductDescribe from "./components/DetailProductDescribe";
import DetailProductImage from "./components/DetailProductImage";

import "./styles.scss";

function DetailProduct() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const [isPage, setIsPage] = useState(true);

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
                  <div className="col l-6">
                    {product && (
                      <DetailProductImage imageList={product?.imageProduct} />
                    )}
                  </div>
                  <div className="col l-6">
                    <div className="infor">
                      <h1 className="infor-title">Bánh mì bơ tỏi</h1>
                      <div className="infor__price-box">
                        <span className="price-product">70000đ</span>
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
                        <div className="price-number-input">
                          <button
                            type="button"
                            className="price-number-btn btn1"
                          >
                            -
                          </button>
                          <input
                            id="number-quality"
                            type="text"
                            maxLength="3"
                            value="1"
                            className="price-number-quality"
                            onChange={() => {}}
                          />
                          <button
                            type="button"
                            className="price-number-btn btn2"
                          >
                            +
                          </button>
                        </div>
                      </form>
                      <div className="price-buy">
                        <button type="submit" className="price-buy-btn order">
                          <span className="price-buy-text">mua hàng</span>
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

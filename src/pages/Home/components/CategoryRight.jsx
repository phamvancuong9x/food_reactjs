import React from "react";

import ProductList from "../../../components/ProductList";
import {
  getFeaturedProductsList,
  getHotProductList,
  getNewProductList,
} from "./constant";

function FeaturedProducts({ productList, loading }) {
  return (
    <>
      <ProductList
        productList={productList}
        title={"sản phẩm nổi bật"}
        loading={loading}
      />
      <div className="col-12 c-12">
        <div className="sale-banner" data-aos="fade-up">
          <div className="sale-banner__item">
            <img
              src="https://api.luxwebsite.net/cuong_image/food_image/sale-banner.jpg"
              alt=""
              className="sale-banner__img"
            />
            <div className="sale-banner__text">
              <span className="sale-banner__title">Best sale of</span>
              <span className="sale-banner__des">
                Giảm 50% tất cả các mặt hàng
              </span>
            </div>
            <span className="sale-banner__percent">
              <span>-50%</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function NewProducts({ productList, loading }) {
  return (
    <>
      <ProductList
        productList={productList}
        title={"sản phẩm mới"}
        loading={loading}
      />
      <div className="col-6">
        <div className="sale-banner" data-aos="fade-left">
          <div className="sale-banner__item">
            <img
              src="https://api.luxwebsite.net/cuong_image/food_image/sale-banner2.jpg"
              alt=""
              className="sale-banner__img"
            />
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="sale-banner" data-aos="fade-right">
          <div className="sale-banner__item">
            <img
              src="https://api.luxwebsite.net/cuong_image/food_image/sale-banner3.jpg"
              alt=""
              className="sale-banner__img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function CategoryRight({ productList, loading }) {
  return (
    <div className="col l-9">
      <div className="row">
        <div id="outstanding"></div>
        <FeaturedProducts
          productList={getFeaturedProductsList(productList)}
          loading={loading}
        />
        <div id="new"></div>

        <NewProducts
          productList={getNewProductList(productList)}
          loading={loading}
        />

        <div id="selling"></div>
        <ProductList
          productList={getHotProductList(productList)}
          title={"Sản phẩm bán chạy trong tuần"}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default CategoryRight;

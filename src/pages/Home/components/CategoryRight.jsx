import React from "react";
import ProductItem from "../../../components/ProductItem";
import ProductList from "../../../components/ProductList";
import {
  getFeaturedProductsList,
  getHotProductList,
  getNewProductList,
} from "./constant";

function FeaturedProducts({ productList }) {
  return (
    <>
      <ProductList productList={productList} title={"sản phẩm nổi bật"} />
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

function NewProducts({ productList }) {
  return (
    <>
      <ProductList productList={productList} title={"sản phẩm mới"} />
      <div class="col-6">
        <div class="sale-banner" data-aos="fade-left">
          <div class="sale-banner__item">
            <img
              src="https://api.luxwebsite.net/cuong_image/food_image/sale-banner2.jpg"
              alt=""
              class="sale-banner__img"
            />
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="sale-banner" data-aos="fade-right">
          <div class="sale-banner__item">
            <img
              src="https://api.luxwebsite.net/cuong_image/food_image/sale-banner3.jpg"
              alt=""
              class="sale-banner__img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function CategoryRight({ productList }) {
  return (
    <div className="col l-9">
      <div className="row">
        <FeaturedProducts productList={getFeaturedProductsList(productList)} />
        <NewProducts productList={getNewProductList(productList)} />
        <ProductList
          productList={getHotProductList(productList)}
          title={"Sản phẩm bán chạy trong tuần"}
        />
      </div>
    </div>
  );
}

export default CategoryRight;

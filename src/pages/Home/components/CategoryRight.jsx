import React from "react";
import ProductItem from "../../../components/ProductItem";

function FeaturedProducts({ productList }) {
  return (
    <div className="col l-12">
      <div className="main-product">
        <div className="colection__title no-bottom">
          <h2 className="colection__title-head product--left">
            sản phẩm nổi bật
          </h2>
        </div>
        <div class="row">
          {productList?.map((productItem) => {
            return <ProductItem product={productItem} key={productItem.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

function CategoryRight({ productList }) {
  console.log(productList);

  return (
    <div className="col l-9">
      <div className="row">
        <FeaturedProducts productList={productList} />
        <div className="col l-12 c-12">
          <div className="sale-banner" data-aos="fade-up">
            <div className="sale-banner__item">
              <img
                src="https://api.luxwebsite.net/cuong_image/food_image//sale-banner.jpg"
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

        {/* <div className="col l-12 c-12">
          <div className="colection__title no-bottom">
            <h2 className="colection__title-head product--left">
              sản phẩm mới
            </h2>
          </div>
          <div className="new-product">
            <div className="row">
              <div className="col l-12">
                <div className="swiper mySwiper2">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="product">
                        <div className="product__preview">
                          <a
                            href="/san-pham-banh-tao-nuong.html"
                            className="product__preview-link"
                          >
                            <img
                              src="./assets/images/product6.jpg"
                              alt=""
                              className="product__preview-img"
                            />
                          </a>
                          <div className="product__preview-buybox"></div>
                        </div>
                        <div className="product__infor">
                          <div className="product__price">
                            <span className="product__price-main">90.000đ</span>
                            <span className="product__price-sale">
                              100.000đ
                            </span>
                          </div>
                          <a
                            href="/san-pham-banh-tao-nuong.html"
                            className="product__name"
                          >
                            Bánh Táo nướng
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product">
                        <div className="product__preview">
                          <a
                            href="/san-pham-cheese-burger.html"
                            className="product__preview-link"
                          >
                            <img
                              src="./assets/images/product5.jpg"
                              alt=""
                              className="product__preview-img"
                            />
                          </a>
                          <div className="product__preview-buybox"></div>
                        </div>
                        <div className="product__infor">
                          <div className="product__price">
                            <span className="product__price-main">
                              180.000đ
                            </span>
                            <span className="product__price-sale">
                              220.000đ
                            </span>
                          </div>
                          <a
                            href="/san-pham-cheese-burger.html"
                            className="product__name"
                          >
                            Cheese Burger (Beef)
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product">
                        <div className="product__preview">
                          <a
                            href="/san-pham-banhSocola-tan-chay.html"
                            className="product__preview-link"
                          >
                            <img
                              src="./assets/images/product7.jpg"
                              alt=""
                              className="product__preview-img"
                            />
                          </a>
                          <div className="product__preview-buybox"></div>
                        </div>
                        <div className="product__infor">
                          <div className="product__price">
                            <span className="product__price-main">
                              150.000đ
                            </span>
                            <span className="product__price-sale"></span>
                          </div>
                          <a
                            href="/san-pham-banhSocola-tan-chay.html"
                            className="product__name"
                          >
                            Bánh Socola tan chảy & kem
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product">
                        <div className="product__preview">
                          <a
                            href="/san-pham-com-rang-trung-cuon.html"
                            className="product__preview-link"
                          >
                            <img
                              src="./assets/images/product8.jpg"
                              alt=""
                              className="product__preview-img"
                            />
                          </a>
                          <div className="product__preview-buybox"></div>
                        </div>
                        <div className="product__infor">
                          <div className="product__price">
                            <span className="product__price-main">
                              120.000đ
                            </span>
                            <span className="product__price-sale">
                              150.000đ
                            </span>
                          </div>
                          <a
                            href="/san-pham-com-rang-trung-cuon.html"
                            className="product__name"
                          >
                            Cơm Rang trứng cuộn
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product">
                        <div className="product__preview">
                          <a
                            href="/san-pham-salad-bo-my.html"
                            className="product__preview-link"
                          >
                            <img
                              src="./assets/images/product9.jpg"
                              alt=""
                              className="product__preview-img"
                            />
                          </a>
                          <div className="product__preview-buybox"></div>
                        </div>
                        <div className="product__infor">
                          <div className="product__price">
                            <span className="product__price-main">
                              160.000đ
                            </span>
                            <span className="product__price-sale">
                              200.000đ
                            </span>
                          </div>
                          <a
                            href="/san-pham-salad-bo-my.html"
                            className="product__name"
                          >
                            Salad Bò Mỹ
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product">
                        <div className="product__preview">
                          <a href="#" className="product__preview-link">
                            <img
                              src="./assets/images/product2.jpg"
                              alt=""
                              className="product__preview-img"
                            />
                          </a>
                          <div className="product__preview-buybox"></div>
                        </div>
                        <div className="product__infor">
                          <div className="product__price">
                            <span className="product__price-main">
                              234.000đ
                            </span>
                            <span className="product__price-sale">
                              267.000đ
                            </span>
                          </div>
                          <a
                            href="/san-pham-salad-bobittet.html"
                            className="product__name"
                          >
                            Salad bò bíp-tết
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product">
                        <div className="product__preview">
                          <a href="#" className="product__preview-link">
                            <img
                              src="./assets/images/product3.jpg"
                              alt=""
                              className="product__preview-img"
                            />
                          </a>
                          <div className="product__preview-buybox"></div>
                        </div>
                        <div className="product__infor">
                          <div className="product__price">
                            <span className="product__price-main">
                              220.000đ
                            </span>
                            <span className="product__price-sale"></span>
                          </div>
                          <a
                            href="/san-pham-pizza-haisan.html"
                            className="product__name"
                          >
                            Pizza hải sản xúc xích
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col l-6 c-6">
          <div className="sale-banner" data-aos="fade-left">
            <div className="sale-banner__item">
              <img
                src="./assets/images/sale-banner2.jpg"
                alt=""
                className="sale-banner__img"
              />
            </div>
          </div>
        </div>
        <div className="col l-6 c-6">
          <div className="sale-banner" data-aos="fade-right">
            <div className="sale-banner__item">
              <img
                src="./assets/images/sale-banner3.jpg"
                alt=""
                className="sale-banner__img"
              />
            </div>
          </div>
        </div>
        <div className="col l-12 c-6">
          <div className="week-product">
            <div className="colection__title no-bottom">
              <h2 className="colection__title-head product--left">
                bán chạy trong tuần
              </h2>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper mySwiper3">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="product">
                    <div className="product__preview">
                      <a href="#" className="product__preview-link">
                        <img
                          src="./assets/images/product1.jpg"
                          alt=""
                          className="product__preview-img"
                        />
                      </a>
                      <div className="product__preview-buybox"></div>
                    </div>
                    <div className="product__infor">
                      <div className="product__price">
                        <span className="product__price-main">340.000đ</span>
                        <span className="product__price-sale"></span>
                      </div>
                      <a
                        href="/san-pham-spaghetti.html"
                        className="product__name"
                      >
                        Spaghetti Bolognaise
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product">
                    <div className="product__preview">
                      <a href="#" className="product__preview-link">
                        <img
                          src="./assets/images/product2.jpg"
                          alt=""
                          className="product__preview-img"
                        />
                      </a>
                      <div className="product__preview-buybox"></div>
                    </div>
                    <div className="product__infor">
                      <div className="product__price">
                        <span className="product__price-main">234.000đ</span>
                        <span className="product__price-sale">267.000đ</span>
                      </div>
                      <a
                        href="/san-pham-salad-bobittet.html"
                        className="product__name"
                      >
                        Salad bò bíp-tết
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product">
                    <div className="product__preview">
                      <a
                        href="/san-pham-pizza-haisan.html"
                        className="product__preview-link"
                      >
                        <img
                          src="./assets/images/product3.jpg"
                          alt=""
                          className="product__preview-img"
                        />
                      </a>
                      <div className="product__preview-buybox"></div>
                    </div>
                    <div className="product__infor">
                      <div className="product__price">
                        <span className="product__price-main">220.000đ</span>
                        <span className="product__price-sale"></span>
                      </div>
                      <a
                        href="/san-pham-pizza-haisan.html"
                        className="product__name"
                      >
                        Pizza hải sản xúc xích
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product">
                    <div className="product__preview">
                      <a
                        href="/san-pham-banh-Torrija.html"
                        className="product__preview-link"
                      >
                        <img
                          src="./assets/images/product4.jpg"
                          alt=""
                          className="product__preview-img"
                        />
                      </a>
                      <div className="product__preview-buybox"></div>
                    </div>
                    <div className="product__infor">
                      <div className="product__price">
                        <span className="product__price-main">50.000đ</span>
                        <span className="product__price-sale">60.000đ</span>
                      </div>
                      <a
                        href="/san-pham-banh-Torrija.html"
                        className="product__name"
                      >
                        Bánh Torrija
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product">
                    <div className="product__preview">
                      <a
                        href="/san-pham-banh-tao-nuong.html"
                        className="product__preview-link"
                      >
                        <img
                          src="./assets/images/product6.jpg"
                          alt=""
                          className="product__preview-img"
                        />
                      </a>
                      <div className="product__preview-buybox"></div>
                    </div>
                    <div className="product__infor">
                      <div className="product__price">
                        <span className="product__price-main">90.000đ</span>
                        <span className="product__price-sale">100.000đ</span>
                      </div>
                      <a
                        href="/san-pham-banh-tao-nuong.html"
                        className="product__name"
                      >
                        Bánh Táo nướng
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product">
                    <div className="product__preview">
                      <a
                        href="/san-pham-cheese-burger.html"
                        className="product__preview-link"
                      >
                        <img
                          src="./assets/images/product5.jpg"
                          alt=""
                          className="product__preview-img"
                        />
                      </a>
                      <div className="product__preview-buybox"></div>
                    </div>
                    <div className="product__infor">
                      <div className="product__price">
                        <span className="product__price-main">180.000đ</span>
                        <span className="product__price-sale">220.000đ</span>
                      </div>
                      <a
                        href="/san-pham-cheese-burger.html"
                        className="product__name"
                      >
                        Cheese Burger (Beef)
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product">
                    <div className="product__preview">
                      <a
                        href="/san-pham-com-rang-trung-cuon.html"
                        className="product__preview-link"
                      >
                        <img
                          src="./assets/images/product8.jpg"
                          alt=""
                          className="product__preview-img"
                        />
                      </a>
                      <div className="product__preview-buybox"></div>
                    </div>
                    <div className="product__infor">
                      <div className="product__price">
                        <span className="product__price-main">120.000đ</span>
                        <span className="product__price-sale">150.000đ</span>
                      </div>
                      <a
                        href="/san-pham-com-rang-trung-cuon.html"
                        className="product__name"
                      >
                        Cơm Rang trứng cuộn
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product">
                    <div className="product__preview">
                      <a
                        href="/san-pham-salad-bo-my.html"
                        className="product__preview-link"
                      >
                        <img
                          src="./assets/images/product9.jpg"
                          alt=""
                          className="product__preview-img"
                        />
                      </a>
                      <div className="product__preview-buybox"></div>
                    </div>
                    <div className="product__infor">
                      <div className="product__price">
                        <span className="product__price-main">160.000đ</span>
                        <span className="product__price-sale">200.000đ</span>
                      </div>
                      <a
                        href="/san-pham-salad-bo-my.html"
                        className="product__name"
                      >
                        Salad Bò Mỹ
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default CategoryRight;

import React from "react";

function CategoryBlog() {
  return (
    <>
      <div className="blog-category">
        <div className="blog-category__title">
          <p>thẻ tags</p>
        </div>
        <ul className="blog-category__content">
          <li className="blog-category__item blog-category__item--boder">
            <a href="#" className="blog-category__link">
              Hamburger
            </a>
          </li>
          <li className="blog-category__item blog-category__item--boder">
            <a href="#" className="blog-category__link">
              Bánh ngọt
            </a>
          </li>
          <li className="blog-category__item blog-category__item--boder">
            <a href="#" className="blog-category__link">
              Bánh Pizza
            </a>
          </li>
          <li className="blog-category__item blog-category__item--boder">
            <a href="#" className="blog-category__link">
              Asian Bread
            </a>
          </li>
          <li className="blog-category__item blog-category__item--boder">
            <a href="#" className="blog-category__link">
              Steak
            </a>
          </li>
        </ul>
      </div>
      <div className="blog-category" data-aos="fade-up">
        <div className="blog-category__title">
          <p>tin tức nổi bật</p>
        </div>
        <ul className="blog-category__content not-pd">
          <li className="blog-category__item ">
            <div className="blog-category__box">
              <a className="blog-category__box-img" href="#">
                <img
                  src="https://api.luxwebsite.net/cuong_image/food_image/blog1.jpg"
                  alt=""
                />
              </a>
              <a className="blog-category__box-text" href="#">
                Cách làm Hamburger bò siêu nhanh cho bữa sáng
              </a>
            </div>
          </li>
          <li className="blog-category__item ">
            <div className="blog-category__box">
              <a className="blog-category__box-img" href="#">
                <img
                  src="https://api.luxwebsite.net/cuong_image/food_image/blog2.jpg"
                  alt=""
                />
              </a>
              <a className="blog-category__box-text" href="#">
                Cách làm bánh pizza thơm ngon tại nhà
              </a>
            </div>
          </li>
          <li className="blog-category__item ">
            <div className="blog-category__box">
              <a className="blog-category__box-img" href="#">
                <img
                  src="https://api.luxwebsite.net/cuong_image/food_image/blog3.jpg"
                  alt=""
                />
              </a>
              <a className="blog-category__box-text" href="#">
                Tận dụng kem bơ làm bánh cà phê ngon tuyệt
              </a>
            </div>
          </li>
          <li className="blog-category__item ">
            <div className="blog-category__box">
              <a className="blog-category__box-img" href="#">
                <img
                  src="https://api.luxwebsite.net/cuong_image/food_image/blog4.jpg"
                  alt=""
                />
              </a>
              <a className="blog-category__box-text" href="#">
                Không thẻ cưỡng lại với kem ốc quế 3 tầng{" "}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CategoryBlog;

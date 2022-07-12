import React from "react";
import CategoryBlog from "../../News/components/CategoryBlog";

function NewDetailContent() {
  return (
    <div className="grid wide">
      <div className="row">
        <div className="col l-3 c-0">
          <CategoryBlog />
        </div>
        <div className="col l-9">
          <div className="myblog">
            <div
              className="myblog__title"
              style={{ color: "var(--sub-color)", textTransform: " uppercase" }}
            >
              CÁCH LÀM HAMBURGER BÒ SIÊU NHANH CHO BỮA SÁNG
            </div>
            <p className="myblog__title-content">
              Hamburger là món ăn nhanh được rất nhiều bạn trẻ yêu thích hiện
              nay, vậy chúng ta cùng trổ tài với cách làm Hamburger bò tại nhà
              nào các bạn.
            </p>
            <p className="myblog__title-content">Nguyên liệu:</p>
            <p className="myblog__title-content">- 1 bánh mì tròn</p>
            <p className="myblog__title-content">- 300g thịt bò xay</p>
            <p className="myblog__title-content">- 30g bột chiên xù</p>
            <p className="myblog__title-content">- 1 lát pho mát</p>
            <p className="myblog__title-content">- 2 khoanh hành tây</p>
            <p className="myblog__title-content">- 3 khoanh cà chua</p>
            <p className="myblog__title-content">- 1 quả trứng gà</p>
            <p className="myblog__title-content">- 2 lá xà lách</p>
            <p className="myblog__title-content">- Tương cà chua, tương ớt</p>
            <p className="myblog__title-content">- Gia vị</p>
            <div className="blog__thumnail">
              <a href="/tin-tuc-1.html" className="blog__thumnail-link">
                <img
                  src="https://api.luxwebsite.net/cuong_image/food_image/blog1.jpg"
                  alt=""
                  className="blog__thumnail-img"
                />
              </a>
            </div>
            <div
              className="myblog__title"
              style={{ color: "var(--sub-color)", fontSize: "1.6rem" }}
            >
              Cách làm:
            </div>
            <p className="myblog__title-content">
              Bước 1: Cho thịt bò xay, bột chiên xù và trừng gà vào bát to, trộn
              đều cho trứng, thịt, bột quyện vào nhau. Sau đó ướp cùng với 1
              thìa nước mắm, 1 thìa đường khoảng 30 phút cho thịt ngấm gia vị.
            </p>
            <p className="myblog__title-content">
              Bước 2: Đặt chảo lên bếp, rồi cho hành tây vào xào qua cho tái để
              kẹp với bánh mì. Thịt bò ướp xong nặn hình tròn dẹt bằng đường
              kính bánh mì và cho vào chảo rán vàng 2 mặt, rán nhỏ lửa để thịt
              bò chín đều.{" "}
            </p>
            <p className="myblog__title-content">
              Bước 3: Khi thịt chín các bạn cắt đôi bánh mì, đặt cà chua đều lên
              một nửa bánh mì, tiếp đến xếp lần lượt thịt bò, pho mát, hành tây,
              rau xà lách đã rửa sạch lên, rồi đặt nửa bánh mì còn lại lên.
              Hamberger bò đã hoàn thành, các bạn dùng bành với tương cà hoặc
              tương ớt.{" "}
            </p>
            <p className="myblog__title-content">
              Nhìn đã thấy hấp dẫn rồi, bắt tay vào làm thôi các bạn, chúc các
              bạn thành công.
            </p>
            <div className="row ">
              <div className="col l-9">
                <div className="time-post">
                  <span className="time-date">
                    <i className="fas fa-calendar"></i>
                    24/11/2021
                  </span>
                  <span className="time-comment">
                    <i className="far fa-comment"></i>3
                  </span>
                  <span className="time-tag">
                    <i className="fas fa-tag"></i>
                    Tags:
                    <a href="#" className="time-tag-link">
                      Bánh Pizza
                    </a>
                    ,
                    <a href="#" className="time-tag-link">
                      Hamberger
                    </a>
                  </span>
                </div>
              </div>
              <div className="col l-3">
                <div className="social">
                  <a href="#" className="social-link">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewDetailContent;

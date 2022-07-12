import React from "react";
import { Link } from "react-router-dom";

function BlogItem({ blogData }) {
  return (
    <div className="myblog" data-aos="fade-up">
      <div className="blog__thumnail">
        <Link to="/newDetail" className="blog__thumnail-link">
          <img src={blogData.image} alt="" className="blog__thumnail-img" />
        </Link>
      </div>
      <div className="myblog__title">
        <Link to="/newDetail" className="myblock__title-link">
          {blogData.name}
        </Link>
      </div>
      <p className="myblog__title-content">
        {blogData.newDescriber}
        <Link to="/newDetail">[Đọc tiếp]</Link>
      </p>
      <div className="row ">
        <div className="col l-9">
          <div className="time-post">
            <span className="time-date">
              <i className="fas fa-calendar"></i>
              {blogData.article_date}
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
  );
}

export default BlogItem;

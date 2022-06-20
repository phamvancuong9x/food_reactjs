import React from "react";
import { Link } from "react-router-dom";

function HeaderTop() {
  return (
    <div className="header">
      <div className="grid wide">
        <div className="row no-gutters">
          <div className="col l-4">
            <div className="header__logo">
              <Link to="/" className="header__logo-link">
                <img
                  src="https://api.luxwebsite.net/cuong_image/food_image/logo.png"
                  alt=""
                  className="header__logo-img"
                />
              </Link>
              <span className="header__logo-text"> Welcome to MocFood</span>
            </div>
          </div>
          <div className="col l-8">
            <div className="header__contact-container">
              <div className="header__contact">
                <div className="header__contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="header__contact-content">
                  <span className="header__contact-title">open:</span>
                  <span href="#" className="header__contact-in4">
                    8 AM - 10 PM
                  </span>
                </div>
              </div>
              <div className="header__contact">
                <div className="header__contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="header__contact-content">
                  <span className="header__contact-title">email:</span>
                  <a href="#" className="header__contact-in4">
                    mocfood@gmail.com
                  </a>
                </div>
              </div>
              <div className="header__contact">
                <div className="header__contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="header__contact-content">
                  <span className="header__contact-title">hotline:</span>
                  <a href="#" className="header__contact-in4">
                    0123456789
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

export default HeaderTop;

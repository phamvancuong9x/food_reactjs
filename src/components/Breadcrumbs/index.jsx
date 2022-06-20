import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function Breadcrumbs({ title, className }) {
  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__linkPage">
        <i className="fas fa-home"></i>
        <div className="breadcrumbs__linkPage-container">
          <span>
            <Link to="/"> Trang chủ /</Link>
          </span>
          <span>{title}</span>
          <span></span>
        </div>
      </div>
      <div className={`breadcrumbs__content ${className}`}>
        <h3 className="breadcrumbs__content-title">{title}</h3>
      </div>
    </div>
  );
}

export default Breadcrumbs;

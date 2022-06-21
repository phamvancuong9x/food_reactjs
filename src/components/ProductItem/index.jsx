import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
function ProductItem({ product }) {
  return (
    <div className="product l-4 c-6">
      <div className="product__preview">
        <Link
          to={`/detail-product/${product.id}`}
          className="product__preview-link"
        >
          <img
            src={product.imageProduct[0]}
            alt=""
            className="product__preview-img"
          />
        </Link>
        <div className="product__preview-buybox"></div>
      </div>
      <div className="product__infor">
        <div className="product__price">
          <span className="product__price-main">{product.price_product}</span>
          <span className="product__price-sale"></span>
        </div>
        <a href="/san-pham-spaghetti.html" className="product__name">
          {product.name_product}
        </a>
      </div>
    </div>
  );
}

export default ProductItem;

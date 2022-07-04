import React from "react";
import { Link } from "react-router-dom";

function ProductItem1({ product }) {
  return (
    <div className="selling__product-box">
      <div className="selling__product-image">
        <Link
          to={`/detail-product/${product.id}`}
          className="selling__product-link"
        >
          <img
            src={product.imageProduct[0]}
            alt=""
            className="selling__product-img"
          />
        </Link>
      </div>
      <div className="selling__product-content">
        <Link
          to={`/detail-product/${product.id}`}
          className="selling__product-title"
        >
          {product.name_product}
        </Link>
        <div className="selling__product-price-box">
          <span className="selling__product-price">
            {product.price_product}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem1;

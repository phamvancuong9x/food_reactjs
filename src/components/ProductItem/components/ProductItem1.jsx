import React from "react";

function ProductItem1({ product }) {
  return (
    <div className="selling__product-box">
      <div className="selling__product-image">
        <a href="/san-pham-spaghetti.html" className="selling__product-link">
          <img
            src={product.imageProduct[0]}
            alt=""
            className="selling__product-img"
          />
        </a>
      </div>
      <div className="selling__product-content">
        <a href="/san-pham-spaghetti.html" className="selling__product-title">
          {product.name_product}
        </a>
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

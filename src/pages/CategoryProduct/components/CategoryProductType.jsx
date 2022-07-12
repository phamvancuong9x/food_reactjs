import React, { useState } from "react";
import { CategoryProductTypeArray } from "./constant";

function CategoryProductType({ showSort, setShowSort, setTypeProduct }) {
  console.log(showSort);
  return (
    <div
      style={{ maxWidth: "252px" }}
      className={
        showSort === true
          ? "col l-3  category-left category-sort-active"
          : "col l-3 category-left"
      }
    >
      <div className="category">
        <div className="category__colection">
          <h2 className="colection__title">
            <span className="colection__title-head">danh mục sản phẩm </span>
            <span className="close_icon" onClick={() => setShowSort(false)}>
              <i className="fas fa-times"></i>
            </span>
          </h2>
          <div className="colection__content">
            <ul className="colection__content-list">
              {CategoryProductTypeArray.map((colectionItem, i) => {
                return (
                  <li
                    className="colection__content-item"
                    key={i}
                    onClick={() => setTypeProduct(colectionItem.typeProduct)}
                  >
                    <div className="colection__content-link">
                      {colectionItem.nameProduct}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryProductType;

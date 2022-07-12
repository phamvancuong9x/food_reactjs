import React from "react";
import { CategoryProductTypeArray } from "./constant";

function CategoryProductType({ setTypeProduct }) {
  return (
    <div className="col l-3 c-0">
      <div className="category">
        <div className="category__colection">
          <h2 className="colection__title">
            <span className="colection__title-head">danh mục sản phẩm</span>
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

import React from "react";
import ProductItem from "../ProductItem";
import { ProductListSkeleton } from "../Skeleton";

function ProductList({ productList, title, loading, quantity }) {
  return (
    <div className="col-12">
      <div className="main-product">
        <div className="colection__title no-bottom">
          <h2 className="colection__title-head product--left">{title}</h2>
        </div>
        <div className="row">
          {!loading &&
            productList?.map((productItem, i) => {
              return <ProductItem product={productItem} key={i} />;
            })}
          {loading && <ProductListSkeleton quantity={quantity} />}
        </div>
      </div>
    </div>
  );
}

export default ProductList;

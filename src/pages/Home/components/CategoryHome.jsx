import React, { useEffect, useState } from "react";
import categoryApi from "../../../api/categoryApi";
import CategoryLeft from "./CategoryLeft";
import CategoryRight from "./CategoryRight";

function CategoryHome() {
  const [productList, setProductList] = useState();
  console.log(productList);
  useEffect(() => {
    (async () => {
      const listProduct = await categoryApi.getAll();
      setProductList(listProduct);
    })();
  }, []);

  return (
    <section className="body">
      <div className="grid wide">
        <div className="row">
          <CategoryLeft productList={productList} />
          <CategoryRight productList={productList} />
        </div>
      </div>
    </section>
  );
}

export default CategoryHome;

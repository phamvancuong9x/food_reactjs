import React, { useEffect, useState } from "react";
import categoryApi from "../../../api/categoryApi";
import CategoryLeft from "./CategoryLeft";
import CategoryRight from "./CategoryRight";

function CategoryHome() {
  const [productList, setProductList] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const listProduct = await categoryApi.getAll();
        setProductList(listProduct);
        setLoading(false);
      } catch (error) {
        console.log(error.name);
      }
    })();
  }, []);

  return (
    <section className="body">
      <div className="grid wide">
        <div className="row">
          <CategoryLeft productList={productList} loading={loading} />
          <CategoryRight productList={productList} loading={loading} />
        </div>
      </div>
    </section>
  );
}

export default CategoryHome;

import { useEffect, useState } from "react";
import categoryApi from "../../api/categoryApi";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductList from "../../components/ProductList";
import CategoryLeft from "../Home/components/CategoryLeft";
import "./styles.scss";

function CategoryProduct() {
  const [productList, setProductList] = useState();

  useEffect(() => {
    (async () => {
      const listProduct = await categoryApi.getAll();
      setProductList(listProduct);
    })();
  }, []);
  return (
    <div className="category-main">
      <Breadcrumbs
        title={"TẤT CẢ SẢN PHẨM"}
        className="breadcrumbs__content-product"
      />

      <div className="content">
        <div className="slider-home-main">
          <div className="grid wide">
            <div className="row">
              <CategoryLeft productList={productList} />
              <div className="l-9 c-12">
                <ProductList
                  productList={productList}
                  title="tất cả sản phẩm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryProduct;

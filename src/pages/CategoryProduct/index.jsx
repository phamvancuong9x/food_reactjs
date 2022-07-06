import { useEffect, useState } from "react";
import categoryApi from "../../api/categoryApi";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductList from "../../components/ProductList";
import CategoryLeft from "../Home/components/CategoryLeft";
import "./styles.scss";

function CategoryProduct() {
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
    <div className="category-main">
      <Breadcrumbs
        title={"TẤT CẢ SẢN PHẨM"}
        className="breadcrumbs__content-product"
      />

      <div className="content">
        <div className="slider-home-main">
          <div className="grid wide">
            <div className="row">
              <CategoryLeft productList={productList} loading={loading} />
              <div className="l-9 c-12">
                <ProductList
                  productList={productList}
                  title="tất cả sản phẩm"
                  loading={loading}
                  quantity={9}
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

import { useEffect, useState } from "react";
import categoryApi from "../../api/categoryApi";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductList from "../../components/ProductList";
import CategoryLeft from "../Home/components/CategoryLeft";
import CategoryProductType from "./components/CategoryProductType";
import {
  CategoryProductTypeArray,
  getNameProduct,
} from "./components/constant";
import "./styles.scss";

function CategoryProduct() {
  const [productList, setProductList] = useState();
  const [typeProduct, setTypeProduct] = useState("allProduct");
  const [loading, setLoading] = useState(true);
  const params = {
    typeProduct,
  };
  const name_product = getNameProduct(typeProduct, CategoryProductTypeArray);
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        let listProduct;
        if (typeProduct !== "allProduct") {
          listProduct = await categoryApi.getAll(params);
        } else {
          listProduct = await categoryApi.getAll();
        }
        setProductList(listProduct);

        setLoading(false);
      } catch (error) {
        console.log(error.name);
      }
    })();
  }, [params.typeProduct]);
  return (
    <div className="category-main">
      <Breadcrumbs
        title={name_product}
        className="breadcrumbs__content-product"
      />

      <div className="content">
        <div className="slider-home-main">
          <div className="grid wide">
            <div className="row">
              <CategoryProductType setTypeProduct={setTypeProduct} />

              <div className="l-9 c-12">
                <ProductList
                  productList={productList}
                  title={name_product}
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

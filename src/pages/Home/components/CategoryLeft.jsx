import ProductItem1 from "../../../components/ProductItem/components/ProductItem1";
import { filterProductList } from "./constant";

function CategoryLeft({ productList }) {
  const listIndex = "1368";
  const productArray = filterProductList(productList, listIndex);
  return (
    <div className="col l-3 c-0">
      <div className="category">
        <div className="category__colection">
          <h2 className="colection__title">
            <span className="colection__title-head">danh mục sản phẩm</span>
          </h2>
          <div className="colection__content">
            <ul className="colection__content-list">
              <li className="colection__content-item">
                <a href="#" className="colection__content-link">
                  Tất cả sản phẩm
                </a>
              </li>
              <li className="colection__content-item">
                <a href="#" className="colection__content-link">
                  Sản phẩm mới
                </a>
              </li>
              <li className="colection__content-item">
                <a href="#" className="colection__content-link">
                  Sản phẩm nổi bật
                </a>
              </li>
              <li className="colection__content-item">
                <a href="#" className="colection__content-link">
                  Sản phẩm khuyến mãi
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="category__selling">
          <div className="colection__title">
            <h2 className="colection__title-head">sản phẩm bán chạy</h2>
          </div>
          <div className="selling__product">
            {productArray?.map((productItem) => {
              return (
                <ProductItem1 product={productItem} key={productItem.id} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryLeft;

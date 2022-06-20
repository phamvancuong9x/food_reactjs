import Breadcrumbs from "../../components/Breadcrumbs";
import "./styles.scss";

function CategoryProduct() {
  return (
    <div className="category-main">
      <Breadcrumbs
        title={"TẤT CẢ SẢN PHẨM"}
        className="breadcrumbs__content-product"
      />
    </div>
  );
}

export default CategoryProduct;

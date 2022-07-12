export const CategoryProductTypeArray = [
  { typeProduct: "allProduct", nameProduct: "Tất cả sản phẩm" },
  { typeProduct: "doannhe", nameProduct: "Đồ ăn nhẹ" },
  { typeProduct: "banhkem", nameProduct: "Bánh kem" },
  { typeProduct: "banhngot", nameProduct: "Bánh ngọt" },
  { typeProduct: "pizza", nameProduct: "Pizza" },
];

export function getNameProduct(typeProduct, CategoryProductTypeArray) {
  const categoryItem = CategoryProductTypeArray.filter((item) => {
    return item.typeProduct === typeProduct;
  });
  return categoryItem[0].nameProduct;
}

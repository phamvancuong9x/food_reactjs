export function filterProductList(productList, listIndex) {
  return productList?.filter((product, i) => {
    return listIndex.includes(i) === true;
  });
}
export function getFeaturedProductsList(productList) {
  return productList?.filter((item, i) => {
    if (i < 6) return item;
  });
}
export function getNewProductList(productList) {
  return productList?.filter((item, i) => {
    if (i >= 6) return item;
  });
}
export function getHotProductList(productList) {
  return productList?.filter((item, i) => {
    if (i >= 3 && i < 6) return item;
  });
}

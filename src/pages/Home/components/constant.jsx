export function filterProductList(productList, listIndex) {
  return productList?.filter((product, i) => {
    return listIndex.includes(i) === true;
  });
}

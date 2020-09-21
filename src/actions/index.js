function selectProduct(product) {
  console.log("PRODUCTS CLICKED : " + product.title);
  return {
    type: "PRODUCT_SELECTED",
    payload: product,
  };
}

export default selectProduct;

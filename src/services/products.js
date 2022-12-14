import { ITEMS_LIST, ITEMS_DETAILS } from "../utils/products";

export function getAllProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ITEMS_LIST);
    }, 2500);
  });
}

export function getProducts(productId) {
  return new Promise((resolve, reject) => {
    const targetProduct = ITEMS_DETAILS.find(
      (products) => products.id === productId
    );
    setTimeout(() => resolve(targetProduct), 1000);
  });
};
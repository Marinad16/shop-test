const fetchAllProducts = () => {
  return fetch("https://fakestoreapi.com/products")
  .then((res) => res.json());
};

const fetchCategoryProducts = (category) => {
  return fetch(
    `https://fakestoreapi.com/products/category/${category}`
  ).then((res) => res.json());
}

export default { fetchAllProducts, fetchCategoryProducts };

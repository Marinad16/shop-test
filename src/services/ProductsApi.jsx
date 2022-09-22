const fetchAllProducts = async () => {
  return await fetch("https://fakestoreapi.com/products")
  .then((res) => res.json());
};

const fetchCategoryProducts = async (category) => {
  return await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  ).then((res) => res.json());
}

export default { fetchAllProducts, fetchCategoryProducts };

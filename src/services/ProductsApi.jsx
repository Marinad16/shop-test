const fetchAllProducts = async () => {
  return await fetch("https://fakestoreapi.com/products")
  .then((res) => res.json());
};

export default { fetchAllProducts };

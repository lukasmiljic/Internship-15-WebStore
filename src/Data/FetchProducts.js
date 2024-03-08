const BASE_URL = "https://fakestoreapi.com";

const fetchProducts = async () => {
  return (await fetch(`${BASE_URL}/products`)).json();
};

export default fetchProducts;

import ProductList from "../../Components/ProductList/ProductList";
import Header from "../../Components/Header";

const Products = () => {
  return (
    <div className="products">
      <Header />
      <hr />
      <h2>Products</h2>
      <ProductList />
    </div>
  );
};
export default Products;

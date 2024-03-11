import ProductList from "../../Components/ProductList/ProductList";
import Logo from "../../Components/Logo/Logo";
import classes from "./Products.module.css";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="products">
      <Link className={classes.logo} to="/">
          <Logo />
        </Link>
      <h2>Products</h2>
      <ProductList />
    </div>
  );
};
export default Products;

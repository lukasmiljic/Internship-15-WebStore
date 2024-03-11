import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchProducts from "../../Data/FetchProducts";
import Header from "../../Components/Header/Header";
import classes from "./Product.module.css";

const Product = () => {
  let [product, setProduct] = useState(null);
  const productID = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const targetProducts = await fetchProducts(`${productID.productID}`);
        console.log(targetProducts);
        setProduct(targetProducts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [productID.productID]);

  return (
    <>
      <Header />
      {product && (
        <div className={classes.productCard}>
          <aside>
            <img
              className={classes.productImage}
              src={product.image}
              alt={product.title}
            />
          </aside>
          <main>
            <p className={classes.productTitle}>{product.title}</p>
            <p className={classes.productDescription}>
              {" "}
              {product.description}{" "}
            </p>
            <p className={classes.productPrice}>
              Price:{" "}
              <span className={classes.price}>{product.price} &euro;</span>
            </p>
            <button className={classes.btn}>
              <div className={classes.btnContent}>
                Buy Now{" "}
                <i class={`fa-solid fa-cart-shopping ${classes.btnIcon}`}></i>
              </div>
            </button>
          </main>
        </div>
      )}
    </>
  );
};

export default Product;

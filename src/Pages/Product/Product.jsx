import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchProducts from "../../Data/FetchProducts";

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
      {product && (
        <div>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      )}
    </>
  );
};

export default Product;

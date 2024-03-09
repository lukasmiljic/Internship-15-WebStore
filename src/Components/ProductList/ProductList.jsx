import React, { useState, useEffect } from "react";
import fetchProducts from "../../Data/FetchProducts.js";

const Products = () => {
  const [productData, setProdcutData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchAndSetData = async () => {
      setIsLoading(true);

      try {
        const products = await fetchProducts();
        setProdcutData(products);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAndSetData();
  }, []);

  if (isLoading) {
    // <Loading />
    return <p>Loading...</p>;
  }

  if (error) {
    // <Error />
    return (
      <p>
        Something went wrong...
        <br /> Error: {error.message}
      </p>
    );
  }

  return (
    <div>
      {productData && (
        <ul>
          {productData.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;

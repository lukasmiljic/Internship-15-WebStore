import React, { useState, useEffect } from "react";
import fetchData from "./FetchData.js";

const Products = () => {
  const [productData, setProdcutData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAndSetData = async () => {
      setIsLoading(true);
      setProdcutData(await fetchData());
      setIsLoading(false);
    };
    fetchAndSetData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
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

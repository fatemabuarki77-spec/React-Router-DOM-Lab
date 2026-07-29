import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Spin } from "antd";

function ProductDetails() {
  const [products, setProducts] = useState(null);
  const { productId } = useParams();

  async function getProductList() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/products/${productId}`,
      );

      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div>
      <h1> Product Details</h1>

      {products ? (
        <>
          <p>Title: {products.title}</p>
          <p>Description: {products.description}</p>
          <p>Category: {products.category}</p>
          <p>Price: {products.price}</p>
          <p>Quantity: {products.course}</p>
        </>
      ) : (
        <Spin spinning={true} size="large" />
      )}
    </div>
  );
}

export default ProductDetails;

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Spin } from "antd";
import { getOneProduct } from "../services/productsServices";
function ProductDetails() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  async function getProductList() {
    try {
      setLoading(true);
      setError(null);
      const response = await getOneProduct(productId);
      setProducts(response);
      setError(false);
      setLoading(false);
    } catch (err) {
      setError(`Cannot get all products ${err.message}`);
      setLoading(false);
    }
  }

  useEffect(() => {
    getProductList();
  }, []);

  if (loading) {
    return <Spin spinning={true} size="large" />;
  } else if (error) {
    return <p>Error: {error}</p>;
  }
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

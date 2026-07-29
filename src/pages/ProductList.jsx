import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { index } from "../services/productsServices";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  async function getProductList() {
    try {
      setLoading(true);
      setError(null);
      const response = await index();
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

  return (
    <div>
      <h1>Product List</h1>
      {products.map((oneProduct) => (
        <div key={oneProduct._id}>
          <p>{oneProduct.title}</p>
          <Link to={`/products/${oneProduct._id}`}>
            See {oneProduct.title} Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

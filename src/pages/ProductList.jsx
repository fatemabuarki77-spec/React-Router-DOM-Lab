import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { index } from "../services/productsServices";

function ProductList() {
  const [products, setProducts] = useState([]);

  async function getProductList() {
    try {
      const response = await index();
      setProducts(response);
    } catch (err) {
      ("ERROR");
      console.log(err);
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

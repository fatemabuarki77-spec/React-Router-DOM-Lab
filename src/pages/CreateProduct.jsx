import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { createProduct } from "../services/productsServices";

function CreateProduct() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
  });

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const createdStudent = await createProduct(formData);
      setFormData(createdStudent);
      navigate("/products");
    } catch (err) {
      ("ERROR");
      console.log(err);
    }
  }

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  return (
    <div>
      <h1>Create Product </h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input name="title" id="title" type="text" onChange={handleChange} />

        <label htmlFor="description">Description:</label>
        <input
          name="description"
          id="description"
          type="text"
          onChange={handleChange}
        />

        <label htmlFor="category">Category:</label>
        <input
          name="category"
          id="category"
          type="text"
          onChange={handleChange}
        />

        <label htmlFor="price">Price:</label>
        <input name="price" id="price" type="text" onChange={handleChange} />

        <label htmlFor="quantity">Quantity:</label>
        <input
          name="quantity"
          id="quantity"
          type="text"
          onChange={handleChange}
        />

        <button>Create Product</button>
      </form>
    </div>
  );
}

export default CreateProduct;

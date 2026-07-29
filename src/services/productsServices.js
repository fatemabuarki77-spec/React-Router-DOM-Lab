import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
});

async function index() {
  const response = await api.get("/products");
  return response.data;
}

async function getOneProduct(productId) {
  const response = await api.get(`/products/${productId}`);
  return response.data;
}

async function createProduct(body) {
  const response = await api.post(`/products`, body);
  return response.data;
}

export { index, getOneProduct, createProduct };

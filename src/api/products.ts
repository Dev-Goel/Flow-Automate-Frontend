import axios from "axios";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const fetchCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
};

export const fetchProductById = async (id: number) => {
  const res = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`);
  return res.data;
};

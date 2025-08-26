import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Product } from "../../api/products";
import { fetchProductById } from "../../api/products";
import { useCart } from "../../context/CartContext";
import Button from "../../components/UI/Button";
import { Container, Image, Title, Description, Price, Rating, Actions } from "./styles";

export default function DetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    async function load() {
      try {
        if (id) {
          setLoading(true);
          const p = await fetchProductById(Number(id));
          setProduct(p);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  if (loading) return <Container>Loading...</Container>;
  if (error || !product) return <Container>Product not found.</Container>;

  return (
    <Container>
      <Title>{product.title}</Title>
      <Image src={product.image} alt={product.title} />
      <Description>{product.description}</Description>
      <Price>${product.price}</Price>
      <Rating>Rating: {product.rating.rate} ({product.rating.count})</Rating>
      <Actions>
        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      </Actions>
    </Container>
  );
}

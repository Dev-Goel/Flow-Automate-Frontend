import Button from "../UI/Button";
import { useCart } from "../../context/CartContext";
import type { Product } from "../../api/products";
import { Card, Image, Title, Price, ViewLink } from "./styles";

type Props = { product: Product };

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>${product.price}</Price>
      <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      <br />
      <ViewLink to={`/product/${product.id}`}>View Details</ViewLink>
    </Card>
  );
}

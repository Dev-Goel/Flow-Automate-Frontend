import Button from "../../components/UI/Button";
import { useCart } from "../../context/CartContext";
import { Container, CartItem, Info, Title, Qty, Price, Total } from "./styles";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) return <Container><p>Your cart is empty.</p></Container>;

  return (
    <Container>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <CartItem key={item.id}>
          <Info>
            <Title>{item.title}</Title>
            <Qty>Quantity: {item.qty}</Qty>
            <Price>${(item.price * item.qty).toFixed(2)}</Price>
          </Info>
          <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
        </CartItem>
      ))}
      <Total>Total: ${total.toFixed(2)}</Total>
    </Container>
  );
}

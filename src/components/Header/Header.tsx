import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { useCart } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";
import { Nav, RightContainer, CartLink } from "./styles";

export default function Header() {
  const { cart } = useCart();
  const { themeName, toggleTheme } = useTheme();

  return (
    <Nav>
      <Link to="/">MiniStore</Link>
      <RightContainer>
        <Button onClick={toggleTheme}>{themeName === "light" ? "Dark" : "Light"}</Button>
        <Link to="/cart">
          <CartLink>Cart ({cart.length})</CartLink>
        </Link>
      </RightContainer>
    </Nav>
  );
}

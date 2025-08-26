import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProviderCustom, useTheme, getTheme } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header/Header";
import ListingPage from "./pages/ListingPage/ListingPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CartPage from "./pages/CartPage/CartPage";
import NotFound from "./pages/NotFound";

function AppContent() {
  const { themeName } = useTheme();
  return (
    <ThemeProvider theme={getTheme(themeName)}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<ListingPage />} />
        <Route path="/product/:id" element={<DetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <ThemeProviderCustom>
      <CartProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </CartProvider>
    </ThemeProviderCustom>
  );
}

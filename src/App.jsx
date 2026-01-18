import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Container from "react-bootstrap/Container";

import NavbarComponent from "./components/navbar";
import Landing from "./pages/Landing";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import products from "./data/products";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(productId) {
    setCart([...cart, productId]);
  }

  function removeFromCart(productId) {
    setCart(cart.filter(p => p !== productId));
  }

  return (
    <BrowserRouter>
      <NavbarComponent cart={cart} />

      <Container className="my-5">
        <Routes>
          <Route
            path="/"
            element={<Landing cart={cart} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} products={products} removeFromCart={removeFromCart} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

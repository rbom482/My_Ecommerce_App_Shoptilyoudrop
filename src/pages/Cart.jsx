import { Container, Card, Button, ListGroup } from "react-bootstrap";

function Cart({ cart, products, removeFromCart }) {
  const cartItems = products.filter(product =>
    cart.includes(product.id)
  );

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Container className="mt-5">
      <h2 className="cart-title mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <Card className="cart-card">
          <ListGroup variant="flush">
            {cartItems.map(item => (
              <ListGroup.Item key={item.id} className="cart-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{item.name}</strong>
                    <div className="text-muted">${item.price.toFixed(2)}</div>
                  </div>

                  <Button
                    className="btn-pastel-outline"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <Button
  className="pastel-btn-success w-100 mt-4"
  size="lg"
  onClick={() => alert("Checkout successful! (Demo only)")}
>
  Proceed to Checkout
</Button>


          <Card.Footer className="cart-footer">
            <strong>Total: ${total.toFixed(2)}</strong>
          </Card.Footer>
        </Card>
      )}
    </Container>
  );
}

export default Cart;
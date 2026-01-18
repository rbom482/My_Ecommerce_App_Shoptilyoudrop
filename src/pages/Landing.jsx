import { Row, Col, Card, Button } from "react-bootstrap";
import products from "../data/products";

function Landing({ cart, addToCart }) {
  return (
    <div>
      <h1 className="mb-4 text-purple">Shop Til You Drop</h1>
<p className="text-muted mb-5">
  Cute finds, cozy vibes, and a little retail therapy 💖
</p>

      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card className="h-100 border-0">
              <Card.Img
                variant="top"
                src={product.image}
                style={{ height: "250px", objectFit: "contain" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="fw-bold">
                  ${product.price.toFixed(2)}
                </Card.Text>

                <Button
                  className="mt-auto"
                  variant={cart.includes(product.id) ? "success" : "primary"}
                  onClick={() => addToCart(product.id)}
                  disabled={cart.includes(product.id)}
                >
                  {cart.includes(product.id) ? "Added to Cart" : "Add to Cart"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Landing;

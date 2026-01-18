import { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import products from "../data/products";

function Landing({ cart, addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(p => p.category === selectedCategory);

  return (
    <div>
      <h1 className="mb-2 text-purple">Shop Til You Drop</h1>
      <p className="mb-4 text-muted">
        Cute finds, cozy vibes, and a little retail therapy
      </p>

      {/* Category Filter */}
      <div className="mb-4 d-flex align-items-center gap-2">
        <strong>Category:</strong>
        <select
          className="form-select w-auto"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <Row>
        {filteredProducts.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
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
                  className="mt-auto pastel-btn"
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


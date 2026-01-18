import { Link } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";

function NotFound() {
  return (
    <div className="text-center mt-5">
      <Alert variant="warning">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </Alert>
      <Button as={Link} to="/" variant="primary">
        Go Back Home
      </Button>
    </div>
  );
}

export default NotFound;

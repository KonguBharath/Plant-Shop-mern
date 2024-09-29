import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { sampleProducts } from './data';

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar expand="lg" className="navBar">
          <Container>
            <Navbar.Brand>Nature's Breeze</Navbar.Brand>
          </Container>
          <nav className="d-flex">
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/signin" className="nav-link">
              SignIn
            </a>
          </nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Row>
            {sampleProducts.map((Product) => (
              <Col key={Product.slug} sm={6} md={4} lg={3}>
                <img
                  src={Product.image}
                  alt={Product.name}
                  className="product-image"
                />
                <h2>{Product.name}</h2>
                <p>{Product.price}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <div className="text-center">
        <footer>All rights reserved to Nature's Breeze</footer>
      </div>
    </div>
  );
}

export default App;

import { Container, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

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
        <Container className="mt-3 ">
          <Outlet />
        </Container>
      </main>
      <div className="text-center">
        <footer>All rights reserved to Nature's Breeze</footer>
      </div>
    </div>
  );
}

export default App;

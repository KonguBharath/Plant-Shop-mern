import { useContext, useEffect } from 'react';
import { Badge, Button, Container, Modal, Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { Store } from './Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const {
    state: { mode, cart },
    dispatch,
  } = useContext(Store);
  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode);
  }, [mode]);
  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' });
  };

  return (
    <div className="d-flex flex-column vh-100">
      <ToastContainer position="bottom-center" limit={1} />
      <header>
        <Navbar expand="lg" className="navBar">
          <Container>
            <Navbar.Brand>Nature's Breeze</Navbar.Brand>
          </Container>
          <nav className="d-flex ms-3">
            <Button variant={mode} onClick={switchModeHandler}>
              <i className={mode === 'light' ? 'fa fa-sun' : 'fa fa-moon'}></i>
            </Button>
            <Link to="/cart" className="nav-link">
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
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

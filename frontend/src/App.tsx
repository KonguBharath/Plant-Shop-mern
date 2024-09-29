import './App.css';
import { sampleProducts } from './data';

function App() {
  return (
    <div>
      <header>Nature's Breeze</header>
      <main>
        <ul>
          {sampleProducts.map((Product) => (
            <li key={Product.slug}>
              <img
                src={Product.image}
                alt={Product.name}
                className="product-image"
              />
              <h2>{Product.name}</h2>
              <p>{Product.price}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer>All rights reserved to Nature's Breeze</footer>
    </div>
  );
}

export default App;

import { Col, Row } from 'react-bootstrap';
import { sampleProducts } from '../data';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div>
      <Row>
        {sampleProducts.map((Product) => (
          <Col key={Product.slug} sm={6} md={4} lg={3}>
            <Link to={'/Product/' + Product.slug}>
              <img
                src={Product.image}
                alt={Product.name}
                className="product-image"
              />
              <h2>{Product.name}</h2>
              <p>{Product.price}</p>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

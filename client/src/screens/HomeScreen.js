import React from 'react';
import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/StoreItem';
import { products } from '../data';

//main page, with bootstrap responsive on different screen sizes
//map to add props to StoreItem component for data

export default function HomeScreen() {
  return (
    <div>
      <h1>
        Best Seller<span className="text-warning">z</span>
      </h1>
      <Row md={3} sm={2} lg={4} className="justify-content-center">
        {products.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

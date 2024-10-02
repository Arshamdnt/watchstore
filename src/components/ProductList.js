// src/components/ProductList.js
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

function ProductList({ products, addToCart, cartItems }) {
  return (
    <Row>
      {products.map((product) => (
        <Col key={product.id} sm={12} md={6} lg={4}>
          <ProductCard
            product={product}
            addToCart={addToCart}
            isAdded={cartItems.includes(product.id)}
          />
        </Col>
      ))}
    </Row>
  );
}

export default ProductList;

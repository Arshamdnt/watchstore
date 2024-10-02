// src/components/Cart.js
import React from 'react';
import { Table, Button } from 'react-bootstrap';

function Cart({ cartItems, products, removeFromCart, updateQuantity }) {
  const total = cartItems.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id);
    return sum + product.price * item.quantity;
  }, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            const product = products.find((p) => p.id === item.id);
            return (
              <tr key={item.id}>
                <td>{product.name}</td>
                <td>
                  <Button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                  {item.quantity}
                  <Button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                </td>
                <td>${product.price * item.quantity}</td>
                <td>
                  <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Cart;

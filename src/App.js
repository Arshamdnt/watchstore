// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Home from './components/Home';

function App() {
  const [products] = useState([
    { id: 1, name: 'Watch A', price: 120, image: '/images/watch1.jpg' }, // آدرس عکس جدید
    { id: 2, name: 'Watch B', price: 80, image: '/images/watch2.jpg' },  // آدرس عکس جدید
    { id: 3, name: 'Watch C', price: 150, image: '/images/watch3.jpg' }  // آدرس عکس جدید
  ]);
  
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id) => {
    setCartItems([...cartItems, { id, quantity: 1 }]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/products" 
            element={
              <ProductList 
                products={products} 
                addToCart={addToCart} 
                cartItems={cartItems.map((item) => item.id)} 
              />
            } 
          />
          <Route 
            path="/cart" 
            element={
              <Cart 
                cartItems={cartItems} 
                products={products} 
                removeFromCart={removeFromCart} 
                updateQuantity={updateQuantity} 
              />
            } 
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import ProductCatalog from './components/ProductCatalog';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product }]);
  };

  const removeFromCart = (productToRemove) => {
    setCartItems(cartItems.filter(item => item.id !== productToRemove.id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopee Now</h1>
      </header>
      <div className="main-content">
        <ProductCatalog addToCart={addToCart} />
        <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default App;

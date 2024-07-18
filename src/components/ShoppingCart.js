import React from 'react';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <p>{item.name} - Rs: {item.price.toFixed(2)}</p>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))}
      </div>
      <h3>Total: Rs: {cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</h3>
    </div>
  );
};

export default ShoppingCart;

import React, { useState } from 'react';
import '../index.css';

const ShoppingList = () => {
  const [cart, setCart] = useState([]);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [receipt, setReceipt] = useState([]);

  const products = [
    {
      id: 1,
      name: "Premium Notebook",
      description: "A high-quality notebook for all your writing needs.",
      price: 99.99,
    },
    {
      id: 2,
      name: "Luxury Gel Pen",
      description: "Smooth-flowing gel pen, perfect for smooth writing.",
      price: 19.99,
    },
    {
      id: 3,
      name: "Leather Binder",
      description: "A durable binder to keep your important documents organized.",
      price: 249.99,
    },
    {
      id: 4,
      name: "Art Sketchbook",
      description: "Perfect for artists who love sketching and doodling.",
      price: 149.99,
    },
    {
      id: 5,
      name: "Sticky Notes Set",
      description: "A set of colorful sticky notes for organizing your thoughts.",
      price: 29.99,
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const processPayment = (e) => {
    e.preventDefault();

    // Simulate payment processing
    setTimeout(() => {
      setPaymentSuccess(true);
      setReceipt(cart); // Save cart details for receipt
      setCart([]); // Clear cart after successful payment
      setShowCheckout(false);
    }, 1000);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="shopping-list">
      <h1>Lady Kay's Stationery Shopping List</h1>

      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              <strong>Price:</strong> R{product.price}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="add-to-cart-btn"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Shopping Cart</h3>
        <p>Items in Cart: {cart.length}</p>
        <p>
          <strong>Total Price:</strong> R{totalPrice}
        </p>
        {cart.length > 0 && (
          <button onClick={handleCheckout} className="checkout-btn">
            Proceed to Checkout
          </button>
        )}
      </div>

      {showCheckout && (
        <div className="checkout-modal">
          <h2>Checkout</h2>
          <form onSubmit={processPayment} className="checkout-form">
            <div className="form-group">
              <label htmlFor="name">Name on Card</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="card">Card Number</label>
              <input type="text" id="card" required maxLength="16" />
            </div>
            <div className="form-group">
              <label htmlFor="expiry">Expiry Date</label>
              <input type="month" id="expiry" required />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" required maxLength="3" />
            </div>
            <button type="submit" className="pay-now-btn">
              Pay Now
            </button>
          </form>
        </div>
      )}

      {paymentSuccess && (
        <div className="payment-success">
          <h2>Payment Successful!</h2>
          <p>Thank you for shopping with Lady Kay's Stationery Company!</p>

          <div className="receipt">
            <h3>Receipt</h3>
            <ul>
              {receipt.map((item, index) => (
                <li key={index}>
                  {item.name} - R{item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <p>
              <strong>Total:</strong> R{totalPrice}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingList;

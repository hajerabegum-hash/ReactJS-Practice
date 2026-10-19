// const Cart = () => {
//   return <div>I m Cart page</div>;
// };

// export default Cart;

import React, { useState } from "react";
import "./CartPage.css";

const INITIAL_CART = [
  {
    id: 1,
    name: "Spicy Margherita Pizza",
    category: "Main Course",
    price: 12.99,
    quantity: 1,
    image: "https://ik.imagekit.io/idrowysjp/pizza.jpg?updatedAt=1792407135551",
  },
  {
    id: 2,
    name: "Crispy Truffle Fries",
    category: "Sides",
    price: 5.49,
    quantity: 2,
    image: "https://ik.imagekit.io/idrowysjp/fries.jpg",
  },
  {
    id: 3,
    name: "Classic Iced Matcha Latte",
    category: "Beverages",
    price: 4.99,
    quantity: 1,
    image: "https://ik.imagekit.io/idrowysjp/latte.jpg",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(INITIAL_CART);
  const deliveryFee = 3.99;

  // Handle increasing quantity
  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + amount;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      }),
    );
  };

  // Handle removing single item completely
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculations
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const total = subtotal > 0 ? subtotal + deliveryFee : 0;

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Food Basket</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>
            Your basket is feeling light! Add delicious items from our menu.
          </p>
          <button className="browse-btn">Browse Menu</button>
        </div>
      ) : (
        <div className="cart-layout">
          {/* Left Side: Cart Items List */}
          <div className="cart-items-section">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-card">
                <img src={item.image} alt={item.name} className="item-image" />

                <div className="item-details">
                  <span className="item-category">{item.category}</span>
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-price-unit">
                    ${item.price.toFixed(2)} each
                  </p>
                </div>

                <div className="item-actions">
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="qty-btn"
                    >
                      -
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>
                  <p className="item-total-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="delete-btn"
                    title="Remove item"
                  >
                    &times;
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Order Summary Card */}
          <div className="cart-summary-section">
            <div className="summary-card">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row total-row">
                <span>Total Amount</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="promo-code-box">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="promo-input"
                />
                <button className="promo-btn">Apply</button>
              </div>

              <button
                className="checkout-btn"
                onClick={() => alert("Proceeding to secure checkout!")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

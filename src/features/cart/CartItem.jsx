import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} from './CartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <nav className="navbar">
          <div>
            <Link to="/">Home</Link>
            <Link to="/plants">Plants</Link>
            <Link to="/about">About</Link>
          </div>
          <Link to="/cart" className="cart-icon">
            🛒 <span className="cart-badge">0</span>
          </Link>
        </nav>
        <h2>🛒 Your Cart is Empty</h2>
        <p>Start adding some beautiful plants!</p>
        <Link to="/plants" style={{ display: 'inline-block', marginTop: '1rem' }}>
          <button className="btn-get-started">Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <nav className="navbar">
        <div>
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/about">About</Link>
        </div>
        <Link to="/cart" className="cart-icon">
          🛒 <span className="cart-badge">{totalQuantity}</span>
        </Link>
      </nav>

      <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ borderBottom: '2px solid #2e7d32', paddingBottom: '0.5rem' }}>
          🛒 Shopping Cart
        </h2>

        {items.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid #ddd',
              padding: '1rem 0',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <div>
                <h4>{item.name}</h4>
                <p style={{ color: '#555' }}>Unit Price: ${item.price.toFixed(2)}</p>
                <p style={{ fontWeight: '600', color: '#2e7d32' }}>
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                style={{
                  padding: '0.2rem 0.8rem',
                  fontSize: '1.2rem',
                  background: '#f5f5f5',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                −
              </button>
              <span style={{ fontSize: '1.1rem', minWidth: '30px', textAlign: 'center' }}>
                {item.quantity}
              </span>
              <button
                onClick={() => dispatch(increaseQuantity(item.id))}
                style={{
                  padding: '0.2rem 0.8rem',
                  fontSize: '1.2rem',
                  background: '#f5f5f5',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                +
              </button>
              <button
                onClick={() => dispatch(removeItem(item.id))}
                style={{
                  background: '#e53935',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0.3rem 0.9rem',
                  cursor: 'pointer',
                  fontWeight: '500',
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        <div
          style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: '#f9f9f9',
            borderRadius: '12px',
            border: '1px solid #ddd',
          }}
        >
          <h3>
            Total Items: <span style={{ fontWeight: 'normal' }}>{totalQuantity}</span>
          </h3>
          <h3>
            Total Amount:{' '}
            <span style={{ color: '#2e7d32', fontWeight: 'bold' }}>
              ${totalAmount.toFixed(2)}
            </span>
          </h3>
        </div>

        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link to="/plants">
            <button
              style={{
                padding: '0.6rem 2rem',
                background: '#2e7d32',
                color: '#fff',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                fontWeight: '500',
              }}
            >
              ← Continue Shopping
            </button>
          </Link>

          <button
            onClick={() => alert('Coming Soon! 🚀')}
            style={{
              padding: '0.6rem 2.5rem',
              background: '#ff8f00',
              color: '#fff',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '1rem',
            }}
          >
            Checkout (Coming Soon)
          </button>

          <button
            onClick={() => dispatch(clearCart())}
            style={{
              padding: '0.6rem 1.5rem',
              background: '#d32f2f',
              color: '#fff',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              fontWeight: '500',
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
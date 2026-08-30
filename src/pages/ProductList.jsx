import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../features/cart/CartSlice';

const plantData = {
  'Indoor Plants': [
    { id: 1, name: 'Monstera', price: 25, image: '/images/monstera.jpg' },
    { id: 2, name: 'Fiddle Leaf Fig', price: 35, image: '/images/fiddleleaf.jpg' },
    { id: 3, name: 'Snake Plant', price: 20, image: '/images/snake.jpg' },
    { id: 4, name: 'Pothos', price: 15, image: '/images/pothos.jpg' },
    { id: 5, name: 'Peace Lily', price: 22, image: '/images/peacelily.jpg' },
    { id: 6, name: 'ZZ Plant', price: 28, image: '/images/zzplant.jpg' },
  ],
  'Outdoor Plants': [
    { id: 7, name: 'Lavender', price: 18, image: '/images/lavender.jpg' },
    { id: 8, name: 'Rosemary', price: 14, image: '/images/rosemary.jpg' },
    { id: 9, name: 'Hydrangea', price: 30, image: '/images/hydrangea.jpg' },
    { id: 10, name: 'Gardenia', price: 26, image: '/images/gardenia.jpg' },
    { id: 11, name: 'Bougainvillea', price: 32, image: '/images/bougainvillea.jpg' },
    { id: 12, name: 'Jasmine', price: 24, image: '/images/jasmine.jpg' },
  ],
  'Succulents': [
    { id: 13, name: 'Aloe Vera', price: 12, image: '/images/aloe.jpg' },
    { id: 14, name: 'Echeveria', price: 10, image: '/images/echeveria.jpg' },
    { id: 15, name: 'Jade Plant', price: 16, image: '/images/jade.jpg' },
    { id: 16, name: 'Agave', price: 20, image: '/images/agave.jpg' },
    { id: 17, name: 'Haworthia', price: 9, image: '/images/haworthia.jpg' },
    { id: 18, name: 'String of Pearls', price: 14, image: '/images/stringofpearls.jpg' },
  ],
};

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({ ...prev, [plant.id]: true }));
  };

  return (
    <div>
      <nav className="navbar">
        <div>
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/about">About</Link>
        </div>
        <Link to="/cart" className="cart-icon">
          🛒
          <span className="cart-badge">{totalQuantity}</span>
        </Link>
      </nav>

      <h2 style={{ textAlign: 'center', margin: '1.5rem 0 0.5rem' }}>
        🌱 Our Plants
      </h2>

      {Object.entries(plantData).map(([category, plants]) => (
        <div key={category} style={{ padding: '1rem 2rem' }}>
          <h3 style={{ borderBottom: '2px solid #2e7d32', paddingBottom: '0.3rem' }}>
            {category}
          </h3>
          <div className="product-grid">
            {plants.map((plant) => {
              const isAdded = addedItems[plant.id] || false;
              const disabled = isAdded;

              return (
                <div className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p className="price">${plant.price.toFixed(2)}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={disabled}
                  >
                    {disabled ? 'Added ✓' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

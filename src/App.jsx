import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList';
import CartItem from './features/cart/CartItem';
import AboutUs from './pages/AboutUs';

const Landing = () => {
  return (
    <div className="landing">
      <h1>🌿 Paradise Nursery</h1>
      <p>Bring nature home — discover our curated collection of houseplants.</p>
      <Link to="/plants" className="btn-get-started">Get Started</Link>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;
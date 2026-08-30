import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList';
import CartItem from './features/cart/CartItem';
import AboutUs from './pages/AboutUs';

const Landing = ({ setShowProductList }) => {
  return (
    <div className="landing">
      <h1>🌿 Paradise Nursery</h1>
      <p>Bring nature home — discover our curated collection of houseplants.</p>
      <button onClick={() => setShowProductList(true)} className="btn-get-started">
        Get Started
      </button>
    </div>
  );
};

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          showProductList ? <ProductList /> : <Landing setShowProductList={setShowProductList} />
        } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;

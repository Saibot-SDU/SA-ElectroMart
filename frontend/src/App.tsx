import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Laptops from './pages/Laptops';
import SSDs from './pages/SSDs';
import Phones from './pages/Phones';
import Playstations from './pages/Playstations';
import Carousel from './components/Carousel'; // Assuming Carousel is its own component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>ElectroMart</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/laptops">Laptops</Link>
            <Link to="/ssds">SSD's</Link>
            <Link to="/phones">Phones</Link>
            <Link to="/playstations">Playstations</Link>
          </nav>
        </header>
        <Carousel />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/ssds" element={<SSDs />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/playstations" element={<Playstations />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

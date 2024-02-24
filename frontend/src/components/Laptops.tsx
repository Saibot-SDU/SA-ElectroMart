import React from 'react';
import { Laptop } from '../models/Laptop'; // Adjust the import path as necessary

const Laptops = () => {
  // Generate 5 dummy Laptop instances
  const laptops = [
    new Laptop("Laptop 1", "imageUrl1.jpg", 1000),
    new Laptop("Laptop 2", "imageUrl2.jpg", 1200),
    new Laptop("Laptop 3", "imageUrl3.jpg", 1100),
    new Laptop("Laptop 4", "imageUrl4.jpg", 1300),
    new Laptop("Laptop 5", "imageUrl5.jpg", 1250),
  ];

  return (
    <div>
      <h2>Laptops</h2>
      <ul>
        {laptops.map((laptop, index) => (
          <li key={index}>
            <img src={laptop.imageUrl} alt={laptop.title} style={{ width: '100px', height: '100px' }} />
            <div>{laptop.title} - Price: ${laptop.getPrice().toFixed(2)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Laptops;

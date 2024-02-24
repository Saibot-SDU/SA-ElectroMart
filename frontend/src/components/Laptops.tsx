import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Laptop } from '../models/Laptop';

const Laptops = () => {
  const [products, setProducts] = useState<Laptop[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Laptop[]>('http://localhost:3001/get-products-by-category?productType=Laptop');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const getPriceAfterDiscount = (basePrice: number, discountRate: number) => {
    return (basePrice * (1 - discountRate)).toFixed(2);
  };

  return (
    <div className="content-container">
      <h2>Laptops</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <img src={product.imageUrl} alt={product.title} style={{ width: '100px', height: '100px' }} />
            <div>{product.title} - Price: ${getPriceAfterDiscount(product.basePrice, product.discountRate)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Laptops;

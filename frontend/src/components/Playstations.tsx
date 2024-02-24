import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PlayStation } from '../models/PlayStation';

const Playstations = () => {
  const [playstations, setPlaystations] = useState<PlayStation[]>([]);

  useEffect(() => {
    const fetchPlaystations = async () => {
      try {
        const response = await axios.get<PlayStation[]>('http://localhost:3001/get-products-by-category?productType=PlayStation');
        setPlaystations(response.data);
      } catch (error) {
        console.error('Error fetching PlayStations:', error);
        setPlaystations([]);
      }
    };

    fetchPlaystations();
  }, []);

  const getPriceAfterDiscount = (basePrice: number, discountRate: number) => {
    return (basePrice * (1 - discountRate)).toFixed(2);
  };

  return (
    <div className="content-container">
      <h2>Playstations</h2>
      <ul>
        {playstations.map((playstation, index) => (
          <li key={index}>
            <img src={playstation.imageUrl} alt={playstation.title} style={{ width: '100px', height: '100px' }} />
            <div>{playstation.title} - Price: ${getPriceAfterDiscount(playstation.basePrice, playstation.discountRate)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playstations;

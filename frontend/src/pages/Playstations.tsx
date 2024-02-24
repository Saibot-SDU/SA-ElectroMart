import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PlayStation } from '../models/PlayStation';

const Playstations = () => {
  const [listOfplaystations, setPlaystations] = useState<PlayStation[]>([]);

  useEffect(() => {
    const fetchPlaystations = async () => {
      try {
        const response = await axios.get<PlayStation[]>('http://localhost:3001/get-products-by-category?productType=PlayStation');
        const playstations = response.data.map(item => new PlayStation(item.title, item.imageUrl, item.basePrice));
        setPlaystations(playstations);
      } catch (error) {
        console.error('Error fetching PlayStations:', error);
        setPlaystations([]);
      }
    };

    fetchPlaystations();
  }, []);

  return (
    <div className="content-container">
      <h2>Playstations</h2>
      <ul>
        {listOfplaystations.map((playstation, index) => (
          <li key={index}>
            <img src={playstation.imageUrl} alt={playstation.title} style={{ width: '100px', height: '100px' }} />
            <div>{playstation.title} - Price: ${playstation.getPrice()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playstations;

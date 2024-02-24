import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SSD } from '../models/SSD';

const SSDs = () => {
  const [ssds, setSSDs] = useState<SSD[]>([]);

  useEffect(() => {
    const fetchSSDs = async () => {
      try {
        const response = await axios.get<SSD[]>('http://localhost:3001/get-products-by-category?productType=SSD');
        setSSDs(response.data);
      } catch (error) {
        console.error('Error fetching SSDs:', error);
        setSSDs([]);
      }
    };

    fetchSSDs();
  }, []);

  const getPriceAfterDiscount = (basePrice: number, discountRate: number) => {
    return (basePrice * (1 - discountRate)).toFixed(2);
  };

  return (
    <div className="content-container">
      <h2>SSDs</h2>
      <ul>
        {ssds.map((ssd, index) => (
          <li key={index}>
            <img src={ssd.imageUrl} alt={ssd.title} style={{ width: '100px', height: '100px' }} />
            <div>{ssd.title} - Price: ${getPriceAfterDiscount(ssd.basePrice, ssd.discountRate)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SSDs;

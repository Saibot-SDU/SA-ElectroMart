import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Phone } from '../models/Phone';

const Phones = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await axios.get<Phone[]>('http://localhost:3001/get-products-by-category?productType=Phone');
        setPhones(response.data);
      } catch (error) {
        console.error('Error fetching phones:', error);
        setPhones([]);
      }
    };

    fetchPhones();
  }, []);

  const getPriceAfterDiscount = (basePrice: number, discountRate: number) => {
    return (basePrice * (1 - discountRate)).toFixed(2);
  };

  return (
    <div className="content-container">
      <h2>Phones</h2>
      <ul>
        {phones.map((phone, index) => (
          <li key={index}>
            <img src={phone.imageUrl} alt={phone.title} style={{ width: '100px', height: '100px' }} />
            <div>{phone.title} - Price: ${getPriceAfterDiscount(phone.basePrice, phone.discountRate)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Phones;

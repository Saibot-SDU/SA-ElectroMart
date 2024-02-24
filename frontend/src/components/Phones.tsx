import React from 'react';
import { Phone } from '../models/Phone';

const Phones = () => {
  const phones = [
    new Phone("Phone 1", "phoneImageUrl1.jpg", 800),
    new Phone("Phone 2", "phoneImageUrl2.jpg", 900),
    new Phone("Phone 3", "phoneImageUrl3.jpg", 850),
    new Phone("Phone 4", "phoneImageUrl4.jpg", 950),
    new Phone("Phone 5", "phoneImageUrl5.jpg", 1000),
  ];

  return (
    <div className="content-container">
      <h2>Phones</h2>
      <ul>
        {phones.map((phone, index) => (
          <li key={index}>
            <img src={phone.imageUrl} alt={phone.title} style={{ width: '100px', height: '100px' }} />
            <div>{phone.title} - Price: ${phone.getPrice().toFixed(2)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Phones;

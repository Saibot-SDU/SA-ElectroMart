import React from 'react';
import { SSD } from '../models/SSD'; // Adjust the import path as necessary

const SSDs = () => {
  const ssds = [
    new SSD("SSD 1", "ssdImageUrl1.jpg", 200),
    new SSD("SSD 2", "ssdImageUrl2.jpg", 250),
    new SSD("SSD 3", "ssdImageUrl3.jpg", 220),
    new SSD("SSD 4", "ssdImageUrl4.jpg", 300),
    new SSD("SSD 5", "ssdImageUrl5.jpg", 280),
  ];

  return (
    <div className="content-container">
      <h2>SSDs</h2>
      <ul>
        {ssds.map((ssd, index) => (
          <li key={index}>
            <img src={ssd.imageUrl} alt={ssd.title} style={{ width: '100px', height: '100px' }} />
            <div>{ssd.title} - Price: ${ssd.getPrice().toFixed(2)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SSDs;

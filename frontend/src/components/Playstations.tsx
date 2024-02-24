import React from 'react';
import { PlayStation } from '../models/PlayStation'; // Adjust the import path as necessary

const Playstations = () => {
  const playstations = [
    new PlayStation("Playstation 1", "playstationImageUrl1.jpg", 400),
    new PlayStation("Playstation 2", "playstationImageUrl2.jpg", 450),
    new PlayStation("Playstation 3", "playstationImageUrl3.jpg", 420),
    new PlayStation("Playstation 4", "playstationImageUrl4.jpg", 500),
    new PlayStation("Playstation 5", "playstationImageUrl5.jpg", 480),
  ];

  return (
    <div className="content-container">
      <h2>Playstations</h2>
      <ul>
        {playstations.map((playstation, index) => (
          <li key={index}>
            <img src={playstation.imageUrl} alt={playstation.title} style={{ width: '100px', height: '100px' }} />
            <div>{playstation.title} - Price: ${playstation.getPrice().toFixed(2)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playstations;

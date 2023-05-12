import React, { useState } from 'react';
import Mercury from './mercury';
import Earth from './earth';
import Mars from './mars';
import Jupiter from './jupiter';
import ArrowButton from './arrowButton';

const Slider = () => {
  const [currentPlanet, setCurrentPlanet] = useState(0);
  const planets = [<Mercury />, <Jupiter />, <Earth />, <Mars />];

  const handlePrevPlanet = () => {
    setCurrentPlanet((prevPlanet) => (prevPlanet === 0 ? planets.length - 1 : prevPlanet - 1));
  };

  const handleNextPlanet = () => {
    setCurrentPlanet((prevPlanet) => (prevPlanet === planets.length - 1 ? 0 : prevPlanet + 1));
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {planets.map((planet, index) => (
          <div key={index} className={`slide ${index === currentPlanet ? 'active' : ''}`}>
            {planet}
          </div>
        ))}
      </div>
      <ArrowButton direction="left" onClick={handlePrevPlanet} />
      <ArrowButton direction="right" onClick={handleNextPlanet} />
    </div>
  );
};

export default Slider;

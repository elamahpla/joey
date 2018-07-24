import React from 'react';
import Websites from './Websites/Websites';
import CalorieCounter from './JS/CalorieCounter/CalorieCounter';
import BookMarker from './JS/Bookmarker/Bookmarker';
import FilterableList from './JS/FilterableList/FilterableList';

const Portfolio = () => (
  <div className="Portfolio">
    <div className="Portfolio-Websites">
      <Websites />
    </div>
    <div className="Portfolio-Components">
      {/* Two */}
    </div>
    <div className="Portfolio-JS">
      <BookMarker />
      <CalorieCounter />
      <FilterableList />
    </div>
    <div className="Portfolio-Other">
      {/* Four */}
    </div>
  </div>
);

export default Portfolio;
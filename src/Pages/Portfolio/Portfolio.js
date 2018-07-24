import React from 'react';
import Websites from './Websites/Websites';
import JS from './JS/JS';

const Portfolio = () => (
  <div className="Portfolio">
    <div className="Portfolio-Websites">
      <Websites />
    </div>
    <div className="Portfolio-Components">
      {/* Two */}
    </div>
    <div className="Portfolio-JS">
      <JS />
    </div>
    <div className="Portfolio-Other">
      {/* Four */}
    </div>
  </div>
);

export default Portfolio;
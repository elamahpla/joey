import React, { Component } from 'react';
import STC from './STC/STC';
import JR from './JR/JR';

class Websites extends Component {
  render() {
    return (
      <div>
        <JR />
        <STC />
      </div>
    );
  }
};

export default Websites;
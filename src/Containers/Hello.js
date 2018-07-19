import React, { Component } from 'react';
import One from '../Components/one';
import Two from '../Components/two';
import Three from '../Components/three';

class Hello extends Component {
  render() {
    return (
      <div className="Hello">
        <One />
        <Two />
        <Three />
      </div>
    );
  }
};

export default Hello;
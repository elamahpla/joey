import React, { Component } from 'react';
import STC from './STC/STC';
import JR from './JR/JR';
import SSC from './SSC/SSC';

class Websites extends Component {
  render() {
    return (
      <div>
        <JR />
        <br/>
        <STC />
        <br/>
        <SSC />
        <br/>
      </div>
    );
  }
};

export default Websites;
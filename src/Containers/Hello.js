import React, { Component } from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import Header from '../Components/Header/Header';
import Body from '../Components/Body/Body';


class Hello extends Component {
  render() {
    return (
      <div className="Hello">
        <Sidebar />
        <Header />
        <Body />
      </div>
    );
  }
};

export default Hello;
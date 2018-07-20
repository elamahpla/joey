import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Portfolio from '../Pages/Portfolio/Portfolio';
import Home from '../Pages/Home/Home';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Sidebar from '../Components/Sidebar/Sidebar';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
          <Footer />
        </div>
      </Router> 
    );
  }
};

export default Routes;
import React, { Component } from 'react';
import Button from '../../../../Components/Button/Button';

class SSC extends Component {
  state = {
    visibility: false
  }
  handleToggleVisibility = () => {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <a href="http://sweetestsoutherncreations.com/#/" target="_blank" rel="nofollow">
          <img
            src="https://i.imgur.com/NEw8g9e.png" 
            alt=""
          />
        </a>
        <Button
          className="Portfolio-Button-SSC"
          onClick={this.handleToggleVisibility}>
            {this.state.visibility ? <p>Solution:</p> : <p>Problem:</p>}
        </Button>
        {this.state.visibility && (
          <div className="Portfolio-Toggle">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sint sed deserunt vero esse rem facere porro fuga quo molestias.</p>
          </div>
        )}
      </div>
    );
  }
}

export default SSC;
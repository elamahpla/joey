import React, { Component } from 'react';
import Button from '../../../../Components/Button/Button';

class ImageSlider extends Component {
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
        <a 
          href="https://github.com/elamahpla/ImageSlider" 
          target="_blank" 
        >
          <img
            src="https://i.imgur.com/GT6DB4r.jpg" 
            alt=""
          />
        </a>
        <Button
          className="Portfolio-Button"
          onClick={this.handleToggleVisibility}
        >
            {this.state.visibility ? <p>Solution:</p> : <p>Problem:</p>}
        </Button>
        {this.state.visibility && (
          <div className="Portfolio-Toggle">
            <p>test</p>
          </div>
        )}
      </div>
    );
  }
}

export default ImageSlider;
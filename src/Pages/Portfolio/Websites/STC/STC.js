import React, { Component } from 'react';
import Button from '../../../../Components/Button/Button';

class STC extends Component {
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
          href="https://mysidiafc.netlify.com/#/" 
          target="_blank" 
          rel="nofollow">
          <img 
            src="https://drive.google.com/uc?id=1pUo71qRaA1gejbK-xmELPAGxCy6uogPu" 
            alt=""
          />  
        </a>
        <Button
          className="Portfolio-Button-STC"
          onClick={this.handleToggleVisibility}>
            {this.state.visibility ? <p>Solution:</p> : <p>Problem:</p>}
        </Button>
        {this.state.visibility && (
          <div className="Portfolio-Toggle">
            <p>I needed a personal website to showcase what I've done and what I can do.</p>
          </div>
        )}
      </div>
    );
  }
}

export default STC;
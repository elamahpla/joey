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
          className="Portfolio-Button"
          onClick={this.handleToggleVisibility}>
            {this.state.visibility ? <p>Solution:</p> : <p>Problem:</p>}
        </Button>
        {this.state.visibility && (
          <div>
            <p>wqdqwdwq</p>
          </div>
        )}
      </div>
    );
  }
}

export default STC;
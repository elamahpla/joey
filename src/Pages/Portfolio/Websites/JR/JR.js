import React, { Component } from 'react';
import Button from '../../../../Components/Button/Button';

class JR extends Component {
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
        <a href="http://joeyrobinson.me/" target="_blank" rel="nofollow">
          <img
            src="https://drive.google.com/uc?id=1A7QHS8Cl0Bh-pUfJTs7m9GVPEOFnbed1" 
            alt=""
          />
        </a>
        <Button
          id="one"
          className="Portfolio-Button-JR"
          onClick={this.handleToggleVisibility}>
            {this.state.visibility ? <p>Solution:</p> : <p>Problem:</p>}
        </Button>
        {this.state.visibility && (
          <div>
            <p>test</p>
          </div>
        )}
      </div>
    );
  }
}

export default JR;
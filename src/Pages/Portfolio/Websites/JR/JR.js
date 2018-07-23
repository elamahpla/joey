import React, { Component } from 'react';

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
            style={{width: '25rem', height: '15rem'}} 
            src="http://puu.sh/B1KUK/32da66d5fc.png" alt=""/>
        </a>
        <p>Problem:</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, corporis?</p>
        <button
          className="Requests-Toggle"
          onClick={this.handleToggleVisibility}>
            {this.state.visibility ? <p>Hide</p> : <p>Special Requests</p>}
        </button>
        {this.state.visibility && (
          <div>
            <br/>
            <p>test</p>
          </div>
        )}
      </div>
    );
  }
}

export default JR;
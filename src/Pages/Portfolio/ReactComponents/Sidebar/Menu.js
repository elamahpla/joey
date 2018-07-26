import React, { Component } from "react";

class Menu extends Component {
  render() {
    let visibility = "hide";
    if (this.props.menuVisibility) {
      visibility = "show";
    }
    return (
      <div 
        id="flyoutMenu"
        onClick={this.props.handleMouseDown} 
        className={visibility}>
        hi
      </div>
    );
  }
}
 
export default Menu;
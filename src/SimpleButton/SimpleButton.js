import React, { Component } from "react";

class SimpleButton extends Component {
  handleClick() {
    console.log('clicked');
  }

  render() {
    return (
      <button type="button" onClick={() => this.handleClick}>
        SimpleButton Text
      </button>
    );
  }
};

export default SimpleButton;

import React, { Component } from "react";
import "./DrawerButton.scss";

export default class DrawerButton extends Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false,
    };
  }
  menuBurger = () => {
    if (!this.state.isOpen) {
      this.setState((prevState) => {
        return { isOpen: !prevState.isOpen };
      });
    } else {
      this.setState((prevState) => {
        return { isOpen: !prevState.isOpen };
      });
    }
  };
  render() {
    return (
      <div
        // className={`${this.state.isOpen ? "menu-btn open" : "menu-btn"}`} // for animation
        className="menu-btn"
        onClick={() => {
          this.menuBurger();
          this.props.click();
        }}
      >
        <div className="menu-btn__burger"></div>
      </div>
    );
  }
}

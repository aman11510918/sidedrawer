import React, { Component } from "react";
import "./App.css";
import Backdrop from "./components/Backdrop/Backdrop";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";

class App extends Component {
  state = {
    isSideDrawerOpen: false,
  };

  drawerToggleHandler = () => {
    this.setState((prevState) => {
      return { isSideDrawerOpen: !prevState.isSideDrawerOpen };
    });
  };

  backdropHandler = () => {
    this.setState({ isSideDrawerOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.isSideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropHandler} />;
    }
    return (
      <div className="App">
        <Navbar drawerClickHandler={this.drawerToggleHandler} />
        <SideDrawer show={this.state.isSideDrawerOpen} />
        {backDrop}

        <main className="contentWrap">
          <p>
            This is the example of responsive navbar with hamburger in mobile
            view.
          </p>
        </main>
      </div>
    );
  }
}

export default App;

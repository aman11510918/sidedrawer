import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/brand.png";
import DrawerButton from "../SideDrawer/DrawerButton";

const Navbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className='toolbar_hamburger-button'>
          <DrawerButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <img src={Logo} alt="Company Logo" className="logo" />
        </div>
        <div className="spaceBetween" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;

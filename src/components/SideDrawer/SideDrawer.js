import React from "react";
import "./SideDrawer.scss";

export default function SideDrawer(props) {
  let drawerClasses = ["side-drawer"];
  if (props.show) {
    drawerClasses.push("open");
  }
  return (
    <nav className={drawerClasses.join(' ')}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

import { useState } from "react";
import "../components/navbar.css";
import img1 from "../images/img1.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("nav");
  const menuBar = () => {
    active === "nav" ? setActive("nav nav_active") : setActive("nav");
  };
  return (
    <div>
      <div className="email">
        <p> events@cheshire-outdoors.info</p>
      </div>
      <div className="navbar">
        <img src={img1} alt="logo" />

        <div className={active}>
          <a href="/">
            <b>Home</b>
          </a>
          <a href="/">About</a>
          <a href="/">Bushcraft</a>
          <a href="/">Groups</a>
          <a href="/">Activities</a>
          <a href="/">Contact</a>
        </div>
        <div onClick={menuBar} className="menu">
          <FaBars size="25" color="#1a6053" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

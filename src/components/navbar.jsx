import "../components/navbar.css";
import img1 from "../images/img1.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="email">
        <p> events@cheshire-outdoors.info</p>
      </div>
      <div className="navbar">
        <img src={img1} alt="logo" />

        <div className="nav">
          <a href="/">
            <b>Home</b>
          </a>
          <a href="/">About</a>
          <a href="/">Bushcraft</a>
          <a href="/">Groups</a>
          <a href="/">Activities</a>
          <a href="/">Contact</a>
          <div className="menu">
            <FaTimes size="25" color="#1a6053" />

            <FaBars size="25" color="#1a6053" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

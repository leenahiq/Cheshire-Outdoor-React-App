import "../components/navbar.css";
import img1 from "../images/img1.png";
const Navbar = () => {
  return (
    <div>
      <div className="email">
        <p> events@cheshire-outdoors.info</p>
      </div>
      <div className="logo">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;

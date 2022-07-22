import img1 from "../images/img1.jpg";
const Navbar = () => {
  return (
    <div>
      <div className="email">
        <p> events@cheshire-outdoors.info</p>
      </div>
      <div className="nav">
        <div>
          <img src={img1} alt="logo" />
        </div>
        <div>
          <a href="/">Home</a>
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

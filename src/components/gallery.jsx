import "../components/gallery.css";
import img3 from "../images/img3.jpg";
import img5 from "../images/img5.jpg";
import img2 from "../images/img2.jpg";
import img4 from "../images/img4.jpg";

const Gallery = () => {
  return (
    <div>
      <div className="img box1">
        <img className="img3" src={img3} alt="img" />
        <img className="img5" src={img5} alt="img" />
      </div>
      <div className="img box2">
        <img className="img2" src={img4} alt="img" />
        <img className="img4" src={img2} alt="img" />
      </div>
    </div>
  );
};

export default Gallery;

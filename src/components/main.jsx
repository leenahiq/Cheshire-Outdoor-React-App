import "../components/main.css";
import Modal from "./modal";
import { useState } from "react";
const Main = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="article">
      <article>
        <h1>Let’s Go Outside </h1>
        <p>
          At Cheshire Outdoors we can’t get enough of the fresh air! So whether
          you’re looking for the thrill of a woodland glide on our Segway
          experience, testing your skill with archery and laser clay shooting or
          being amazed as you get hands-on and try birds of prey in a falconry
          encounter!
        </p>
        <p>
          We’ve got lots of adventures and activities all designed for small
          groups, families, schools, hen or stag parties or corporate away days.
          Get outside this year and get some fresh air and adventure.
        </p>
      </article>
      <button
        className="btn"
        onClick={() => {
          setModal(true);
        }}
      >
        READ MORE
      </button>
      {modal && <Modal closeModal={setModal} />}
    </div>
  );
};

export default Main;

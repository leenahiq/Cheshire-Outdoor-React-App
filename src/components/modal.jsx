import "../components/main.css";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-backdrop">
        <div className="modal-box">
          <button className="closeBtn" onClick={() => closeModal(false)}>
            X
          </button>
          <h1>Modal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum
            dolor consectetur nobis doloremque rem quae quibusdam amet pariatur,
            ad magni odit cupiditate perferendis quia sunt tempora ullam laborum
            incidunt?
          </p>
          <br />
          <br />
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            vitae, tempore ad non quos voluptates possimus in deserunt
            reiciendis doloremque consectetur aspernatur odio esse libero
            impedit officiis perferendis quisquam doloribus.
          </p>
          <br />
          <br />
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            vitae, tempore ad non quos voluptates possimus in deserunt
            reiciendis doloremque consectetur aspernatur odio esse libero
            impedit officiis perferendis quisquam doloribus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;

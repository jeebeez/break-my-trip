import React, { useRef } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Modal.css";

export default function Modal({ setShowModal, inner }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return (
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <SearchBar size={"mobile"} setShowModal={setShowModal} />
        <div className="close-modal">
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
      </div>
    </div>
  );
}

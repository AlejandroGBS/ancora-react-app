import React, { useState } from "react";
import { Modal } from "../components/Modal";
import { ReactDimmer } from "react-dimmer";
import MenuHeader from "../components/menuHeader";

export default function ReportNewContainer() {
  const [isModalOpen, setModal] = useState(false);

  const handleClick = () => {
    setModal((prevState) => !prevState);
  };

  return (
    <>
      <div className="nav">
        <MenuHeader />
        <reportNew />
      </div>
      <div>
        <div className="body">
          <button onClick={handleClick}>caca para ti</button>
          <div className="nav"></div>
        </div>

        {isModalOpen && <Modal closeModal={setModal} />}

        <ReactDimmer
          isOpen={isModalOpen}
          exitDimmer={setModal}
          zIndex={100}
          blur={1.5}
        />
      </div>
    </>
  );
}

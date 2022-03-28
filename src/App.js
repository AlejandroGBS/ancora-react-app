import "./styles.css";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Modal } from "./components/Modal";
import { Menu } from "./components/Menu";
import { ReactDimmer } from "react-dimmer";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [isModalOpen, setModal] = useState(false);
  const [isMenuOpen, setMenu] = useState(false);

  const handleClick = () => {
    setModal((prevState) => !prevState);
  };

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <>
      <div className="app">
        <div className="header">
          <GiHamburgerMenu className="menu-btn" onClick={handleMenu} />
          <h1>Ancora S.L.</h1>
          <div className="nav"></div>
        </div>

        <div className="body">
          <button onClick={handleClick}>Open Modal</button>
        </div>
      </div>

      {isModalOpen && <Modal closeModal={setModal} />}
      <Menu isMenuOpen={isMenuOpen} />

      <ReactDimmer
        isOpen={isModalOpen}
        exitDimmer={setModal}
        zIndex={100}
        blur={1.5}
      />
      <ReactDimmer
        isOpen={isMenuOpen}
        exitDimmer={setMenu}
        zIndex={100}
        blur={1.5}
      />
    </>
  );
}

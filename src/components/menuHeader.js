import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ReactDimmer } from "react-dimmer";
import { Menu } from "./Menu";

export default function MenuHeader() {
  const [isMenuOpen, setMenu] = useState(false);

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
      </div>
      <Menu isMenuOpen={isMenuOpen} />

      <ReactDimmer
        isOpen={isMenuOpen}
        exitDimmer={setMenu}
        zIndex={100}
        blur={1.5}
      />
    </>
  );
}

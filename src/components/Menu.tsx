import * as React from "react";
import { Link } from "react-router-dom";

interface IMenuProps {
  isMenuOpen: boolean;
}

export const Menu = ({ isMenuOpen }: IMenuProps) => {
  return (
    <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
      <ul>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          <li id="playerTeam">
            <Link to="/reportNew">Nuevo parte</Link>
          </li>
          <li id="player">
            <Link to="/expenses">Expenses</Link>
          </li>
        </nav>
      </ul>
    </div>
  );
};

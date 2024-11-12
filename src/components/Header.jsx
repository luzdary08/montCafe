import React from "react";
import "../styles/Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <a href="#">Logo</a>
          <nav className="header__nav">
            <a href="#" className="active">inicio</a>
            <a href="#">productos</a>
            <a href="#">nosotros</a>
            <a href="#">contactos</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

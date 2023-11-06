import React from "react";

import Search from "./../Form/Search/Search";

import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">
          <img src="public/monta_no_mori_logo.svg" />
        </a>
      </div>
      <Search />
      <button className="header__favorite">
        <img src="public/heart-icon.png" />
        <p>Favorite</p>
      </button>
    </header>
  );
}

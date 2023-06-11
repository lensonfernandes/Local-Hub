import React from "react";
//import logo from "../public/images/logo.png";
import logo from "../src/assets/logo.png";
import "../src/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";

import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="nav-section">
        <img src={logo} alt="Logo" className="logo" /> <SearchBar />
        <a href="#" className="nav-link">
          Login
        </a>
        <a href="#" className="nav-link">
          Returns &amp; Orders
        </a>
        <a href="#" className="nav-link">
          Amazon Prime
        </a>
      </div>
      <div className="nav-section">
        <a href="#" className="nav-link basket-icon">
          <FontAwesomeIcon icon={faShoppingBasket} />
          <span className="basket-count">0</span>
        </a>
      </div>
    </header>
  );
};

export default Header;

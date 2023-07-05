import React from "react";
//import logo from "../public/images/logo.png";
import logo from "../src/assets/logo.png";
import "../src/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import { useStateValue } from "./StateProvider";

import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";


const Header = () => {

  const [{basket}] = useStateValue();
  return (
    <header className="header">
      <div className="nav-section">
        <img src={logo} alt="Logo" className="logo" /> <SearchBar />
        <a href="/login" className="nav-link">
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
          <span className="basket-count">{basket.length}</span>
        </a>
      </div>
    </header>
  );
};

export default Header;

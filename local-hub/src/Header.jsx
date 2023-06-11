import React from "react";
//import logo from "../public/images/logo.png";
import logo from '../src/assets/logo.png'
import '../src/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchBar from "./SearchBar";




const Header = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="Logo" className="logo" />{" "}
        <SearchBar />
      </nav>
    </div>
  );
};

export default Header;

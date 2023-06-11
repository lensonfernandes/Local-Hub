import React from "react";
//import logo from "../public/images/logo.png";
import logo from '../src/assets/logo.png'
import '../src/Header.css'

const Header = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="Logo" className="logo" />{" "}
        {/* ... other navigation elements */}
      </nav>
    </div>
  );
};

export default Header;

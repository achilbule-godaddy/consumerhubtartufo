import React from "react";
import GoDaddyLogo from "../Logos/GoDaddyLogo";
import menuBar from "../../Constants/menuData.js";
import NavArrowLogo from "../Logos/NavArrowLogo";

function Navigation(props) {
  return (
    <header id="header">
      <div className="container">
        <div className="d-flex align-items-center">
          <div className="logo">
            <a href="/#">
              <GoDaddyLogo />
            </a>
          </div>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#headerMenu"
            aria-controls="headerMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="menu-lines"></span>
          </button>
          <div className="header-menu">
            <div className="collapse navbar-collapse" id="headerMenu">
              <ul className="navbar-nav">
                {menuBar.map((menuBar, index) => (
                  <li className="nav-item" key={index}>
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/#"
                    >
                      {menuBar}
                      <NavArrowLogo />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;

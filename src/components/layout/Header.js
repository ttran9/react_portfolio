import React from "react";
import { Link } from "react-router-dom";
import * as Constants from "../../Constants";

const Header = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to={`${Constants.HOME_URL}`}>
        Home
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#header-nav"
        aria-controls="header-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="header-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={`${Constants.ABOUT_URL}`}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${Constants.PROJECT_URL}`}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;

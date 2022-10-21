import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <div className="container">
    <div className="row">
      <div className="header">
        <ul className="menu-list">
          <li className="list-item-1">
            <Link to="/regester" className="signin">
              Sign in
            </Link>
          </li>

          <li className="list-item-2">
            <Link to="/regester" className="contact">
              <FontAwesomeIcon icon={faCommentDots} className="facomment" />
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </div>

    <nav className="nbheader">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/start_learn">
            Start Learn
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/inviroment_setup">
            Enviroment Setup
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/regester">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;

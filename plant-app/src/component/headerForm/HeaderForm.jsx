import React from "react";
import { Link } from "react-router-dom";
import "./HeaderForm.scss";

const HeaderForm = () => {
  return (
    <div className="header-form">
      <div className="container">
        <div className="row">
          <h3>
            <Link to="/login-page">Login</Link>
            <Link to="/regester-page">Regester</Link>
          </h3>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default HeaderForm;

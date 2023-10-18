import React from "react";
import { Link } from "react-router-dom";
import "./FooterForm.scss";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const FooterForm = () => {
  return (
    <div className="footer-form">
      <div className="container">
        <div className="row parant">
          <div className="col-5">
            <hr className="line" />
          </div>

          <div className="col-2 contanue-with">or containue with</div>

          <div className="col-5">
            <hr className="line" />
          </div>
          <div className="other-contanu">
            <Link to="" className="btn on-bottons col-5">
              <FcGoogle className="google" />
              Continue with Google
            </Link>
            <Link to="" className="btn on-bottons col-5">
              <FaFacebookF className="facebook" />
              Continue with Facebook
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterForm;

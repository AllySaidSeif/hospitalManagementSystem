import { Link } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBedPulse,
  faRightFromBracket,
  faHospitalUser,
  faUserNurse,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header";

const AdiminHome = function () {
  return (
    <div className="drContainer">
      <div className="DrBar">
        <ul>
          <li>
            <Link to="">
              <span className="icon">
                <FontAwesomeIcon className="fa" icon={faHouse} />{" "}
              </span>
              <span className="title">Home</span>
            </Link>
          </li>
          <li>
            <Link to="PatientInfo">
              <span className="icon">
                <FontAwesomeIcon className="fa" icon={faBedPulse} />
              </span>
              <span className="title">patient</span>
            </Link>
          </li>

          <li>
            <Link to="Workers">
              <span className="icon">
                <FontAwesomeIcon className="fa" icon={faUserNurse} />
              </span>
              <span className="title">Workers</span>
            </Link>
          </li>

          <li>
            <Link to="/">
              <span className="icon">
                <FontAwesomeIcon className="fa" icon={faRightFromBracket} />
              </span>
              <span className="title">LogOut</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="DrHomeHead">
        <Header />
      </div>
      <div className="main">
        <div className="cardBox">
          <Link to="Workers">
            <div className="card">
              <div className="cardNumber"></div>
              <div className="cardIcon">
                <FontAwesomeIcon className="fa" icon={faUserNurse} />
              </div>
              <div className="cardText">Workers Info</div>
            </div>
          </Link>
        </div>

        <div className="cardBox">
          <Link to="PatientInfo">
            <div className="card">
              <div className="cardNumber"></div>
              <div className="cardIcon">
                <FontAwesomeIcon className="fa" icon={faHospitalUser} />
              </div>
              <div className="cardText">Patient Information</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdiminHome;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBedPulse,
  faRightFromBracket,
  faCalendarCheck,
  faHospitalUser,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header";
import { Link } from "react-router-dom";

const DrHome = function () {
  return (
    <div className="drContainer">
      <div className="DrBar">
        <ul>
          <li>
            <Link to="DrHome">
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
            <a href="/">
              <span className="icon">
                <FontAwesomeIcon className="fa" icon={faRightFromBracket} />
              </span>
              <span className="title">LogOut</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="DrHomeHead">
        <Header />
      </div>
      <div className="main">
        <div className="cardBox">
          <Link to="PatientInfo">
            <div className="card">
              <div className="cardNumber">0</div>
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

export default DrHome;

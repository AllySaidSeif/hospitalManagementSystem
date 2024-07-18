import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faUserNurse,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header";
import { Link } from "react-router-dom";
//import RegisterDoctor from "../components/registerDoctorForm";
//import RegisterNurse from "../components/nurseReg";

function Workers() {
  return (
    <div>
      <div className="DrHomeHead" id="WorkerHome">
        <Header />
      </div>
      <div className="main" id="WorkerMain">
        <div className="cardBox" id="cardBox">
          <Link to="RegDr">
            <div className="card" id="cardRegDr">
              <div className="cardIcon">
                <FontAwesomeIcon className="fa" icon={faIdCard} />
              </div>
              <div className="cardText">Register New Doctor</div>
            </div>
          </Link>
        </div>

        <div className="cardBox" id="cardBox">
          <Link to="AllDoctor">
            <div className="card" id="card">
              <div className="cardIcon">
                <FontAwesomeIcon className="fa" icon={faUserDoctor} />
              </div>
              <div className="cardText">All Doctor</div>
            </div>
          </Link>
        </div>

        <div className="cardBox" id="cardBox">
          <Link to="AllNurse">
            <div className="card" id="card">
              <div className="cardIcon">
                <FontAwesomeIcon className="fa" icon={faUserNurse} />
              </div>
              <div className="cardText">All Nurse</div>
            </div>
          </Link>
        </div>

        <div className="cardBox" id="cardBox">
          <Link to="NurseReg">
            <div className="card" id="card">
              <div className="cardIcon">
                <FontAwesomeIcon className="fa" icon={faUserNurse} />
              </div>
              <div className="cardText">Register New Nurse</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="loginDr"></div>

      <div className="loginDr" id="loginNurse"></div>
    </div>
  );
}

export default Workers;

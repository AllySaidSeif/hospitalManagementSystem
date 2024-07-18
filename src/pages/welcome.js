import React from "react";
import Admnistor from "../Image/Administator.png";
import Doctor from "../Image/Doctors.jpg";
import Nurse from "../Image/nurses.avif";
import { Link } from "react-router-dom";

const welcome = function () {
  return (
    <div className="welcome">
      <div className="background">
        <Link to="/AdminLogin">
          <img src={Admnistor} alt="admnistrator" />
        </Link>
        <div className="Text">
          <p>Administration</p>
        </div>
      </div>

      <div className="background">
        <Link to="/DrLogin">
          <img src={Doctor} alt="Doctor" />
        </Link>
        <div className="Text">
          <p>Doctor</p>
        </div>
      </div>

      <div className="background">
        <Link to="/NurseLogin">
          <img src={Nurse} alt="Nurse" />
        </Link>
        <div className="Text">
          <p>Nurse</p>
        </div>
      </div>
    </div>
  );
};

export default welcome;

import React from "react";
import { Link } from "react-router-dom";

const doctorForm = () => {
  let Login = "Login";

  return (
    <div className="doctor">
      <div className="container">
        <h2>Hello!</h2>
        <span className="LoginWelcome">Doctor</span>
        <form>
          <div className="inputBox">
            <input type="text" placeholder="Name" />
          </div>
          <div className="inputBox">
            <input type="password" placeholder="Password" />
          </div>
          <div className="inputBox">
            <Link to="DrHome">
              <input type="submit" value={Login} id="login" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default doctorForm;

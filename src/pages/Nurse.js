import React, { useState } from "react";
import { Link } from "react-router-dom";

const nurseLogin = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState("");

  let Login = "Login";
  return (
    <div className="doctor">
      <div className="container">
        <h2>Hello!</h2>
        <span className="LoginWelcome">Nurse</span>
        <form>
          <div className="inputBox">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="inputBox">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="inputBox">
            <Link to="NurseHome">
              <input type="submit" value={Login} id="login" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default nurseLogin;

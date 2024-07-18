import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AdminstratorLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let Login = "Login";

  const navigate = useNavigate();

  const DrEnter = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8080/admin/newAdmin", {
        name: name,
        password: password,
      });

      if (result.status === 200) {
        navigate("AdiminHome");
      }
    } catch (error) {
      console.error("login faile");
      alert("login Fail");
    }
  };

  return (
    <div className="doctor">
      <div className="container">
        <h2>Hello!</h2>
        <span className="LoginWelcome">Adminstrator</span>
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
            <Link to="AdiminHome">
              <input type="submit" value={Login} id="login" onClick={DrEnter} />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminstratorLogin;

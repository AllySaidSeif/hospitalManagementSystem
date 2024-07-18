import React, { useState } from "react";
import Header from "../components/header";
import axios from "axios";
import { useParams } from "react-router-dom";

const NurseUpdate = function () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [country, setCountry] = useState("");
  const [regional, setReginal] = useState("");

  const nurses = { name, email, address, phoneNo, country, regional };

  const { id } = useParams();

  const nurseUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/nurse/update/${id}`, nurses);
  };

  return (
    <div>
      <Header />
      <div className="DrContainer">
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputText4" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Name  Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              type="Email"
              class="form-control"
              id="inputPassword4"
              placeholder="hospital@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Temeke Dar-es-salaam"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              PhoneNo:
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="0000-000-000"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              Country
            </label>
            <input
              type="text"
              class="form-control"
              id="inputCity"
              placeholder="Tanzania"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              Regional
            </label>
            <input
              type="text"
              class="form-control"
              id="inputCity"
              placeholder="Dar-es-salaam"
              value={regional}
              onChange={(e) => setReginal(e.target.value)}
            />
          </div>

          <div class="col-12">
            <button
              type="submit"
              class="btn btn-primary justify-content-md-end"
              onClick={nurseUpdate}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NurseUpdate;

import React, { useState } from "react";
import Header from "./header";

const RegDr = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [doctorType, setDoctorType] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const doctor = { name, email, address, doctorType, country, city };
    fetch("http://localhost:8080/doctor/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doctor),
    }).then(() => {
      console.log("new doctor added");
    });
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
              Doctor Type
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Asthma"
              value={doctorType}
              onChange={(e) => setDoctorType(e.target.value)}
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
              City
            </label>
            <input
              type="text"
              class="form-control"
              id="inputCity"
              placeholder="Dar-es-salaam"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div class="col-12">
            <button
              type="submit"
              class="btn btn-primary justify-content-md-end"
              onClick={handleClick}
            >
              Add
            </button>
          </div>
        </form>
        {name}
      </div>
    </div>
  );
};

export default RegDr;

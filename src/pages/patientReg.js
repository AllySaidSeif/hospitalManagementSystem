import React, { useState } from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";

const PatientReg = () => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");

  const AddPatient = (e) => {
    e.preventDefault();
    const patient = { name, phoneNo, address };
    fetch("http://localhost:8080/patient/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patient),
    }).then(() => {
      console.log("patient added");
    });
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="patient">
        <form class="row g-3 needs-validation" novalidate shadow>
          <div class="col-md-4" id="input">
            <label for="validationCustom01" class="form-label" id="label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label" id="label">
              phoneNo
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom02"
              required
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom03" class="form-label" id="label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom03"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div class="invalid-feedback">Please write place.</div>
          </div>
          <div class="col-12">
            <Link
              to="PatientInfo"
              class="btn btn-primary"
              type="submit"
              style={{ marginLeft: "140px" }}
              onClick={AddPatient}
            >
              Add Patient
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientReg;

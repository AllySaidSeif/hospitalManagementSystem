import React, { useState } from "react";
import Header from "../components/header";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PatientUpdate = () => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState();

  let navigate = useNavigate();
  const { id } = useParams();

  const patient = { name, phoneNo, address };

  const AddPatient = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/patient/update/${id}`, patient);
    navigate("PatientInfo");
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
          <br></br>
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
          <div>
            <div class="col-12">
              <button
                class="btn btn-primary ml-12"
                type="submit"
                style={{ margin: "16px" }}
                onClick={AddPatient}
              >
                Add Patient
              </button>

              <button
                class="btn btn-danger"
                type="submit"
                id="cancel"
                onClick={AddPatient}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientUpdate;

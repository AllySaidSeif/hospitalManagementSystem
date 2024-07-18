import React, { useEffect, useState } from "react";
import Header from "../components/header";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const PatientInfo = () => {
  const [patients, setPatients] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadPatient();
  }, []);
  const loadPatient = async () => {
    const result = await axios.get("http://localhost:8080/patient/getPatient");
    setPatients(result.data);
  };

  const deletePatient = async (id) => {
    await axios.delete(`http://localhost:8080/patient/delete?id=${id}`);
    loadPatient();
  };
  return (
    <div>
      <div>
        <Header />

        <div className="content" id="content">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">phoneNo</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr>
                  <th scope="row" key={patient.id}>
                    {index + 1}
                  </th>
                  <td>{patient.name}</td>
                  <td>{patient.phoneNo}</td>
                  <td>{patient.address}</td>
                  <td>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`PatientUpdate/${patient.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deletePatient(patient.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;

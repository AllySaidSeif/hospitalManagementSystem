import React, { useEffect, useState } from "react";
import Header from "../components/header";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import DoctorUpdate from "./doctorUpdate";

const AllDoctor = () => {
  const [doctors, setDoctor] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadDoctors();
  }, []);

  const loadDoctors = async () => {
    const result = await axios.get("http://localhost:8080/doctor/getAll");
    setDoctor(result.data);
  };

  const deleteDoctor = async (id) => {
    await axios.delete(`http://localhost:8080/doctor/delete?id=${id}`);
    loadDoctors();
  };
  return (
    <div className="AllDrBody">
      <div className="DrHeader">
        <Header />
      </div>
      <div className="content" id="content">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Doctor Type</th>
              <th scope="col">Country</th>
              <th scope="col">City</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr>
                <th scope="row" key={doctor.id}>
                  {index + 1}
                </th>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.address}</td>
                <td>{doctor.doctorType}</td>
                <td>{doctor.country}</td>
                <td>{doctor.city}</td>
                <td>
                  <Link
                    to={`DoctorUpdate/${doctor.id}`}
                    className="btn btn-outline-primary mx-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteDoctor(doctor.id)}
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
  );
};

export default AllDoctor;

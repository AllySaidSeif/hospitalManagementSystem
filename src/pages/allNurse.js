import React, { useEffect, useState } from "react";
import Header from "../components/header";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const AllNurse = () => {
  const [nurses, setnurse] = useState([]);

  useEffect(() => {
    loadNurse();
  }, []);

  const { id } = useParams();
  const loadNurse = async () => {
    const result = await axios.get("http://localhost:8080/nurse/getAllNurse");
    setnurse(result.data);
  };

  const deleteNurse = async (id) => {
    await axios.delete(`http://localhost:8080/nurse/delete?id=${id}`);
    loadNurse();
  };
  return (
    <div>
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
            {nurses.map((nurse, index) => (
              <tr>
                <th scope="row" key={nurse.id}>
                  {index + 1}
                </th>
                <td>{nurse.name}</td>
                <td>{nurse.email}</td>
                <td>{nurse.address}</td>
                <td>{nurse.phoneNo}</td>
                <td>{nurse.country}</td>
                <td>{nurse.city}</td>
                <td>
                  <Link
                    to={`NurseUpdate/${nurse.id}`}
                    className="btn btn-outline-primary mx-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteNurse(nurse.id)}
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

export default AllNurse;

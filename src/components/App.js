import "./App.css";
import React from "react";
import "./Main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../pages/welcome";
import DrHome from "../pages/doctorHome";
import Doctor from "../pages/doctor";
import NurseLogin from "../pages/Nurse";
import AdminstratorLogin from "../pages/AdminstratorLogin";
import AdiminHome from "../pages/administatorHome";
import NurseHome from "../pages/nurseHome";
import Workers from "../pages/Workers";
import AllDoctor from "../pages/allDoctor";
import RegDr from "./registerDoctorForm";
import NurseReg from "./nurseReg";
import AllNurse from "../pages/allNurse";
import PatientReg from "../pages/patientReg";
import PatientInfo from "../pages/patientInformation";
import PatientUpdate from "../pages/patientUpdate";
import DoctorUpdate from "../pages/doctorUpdate";
import NurseUpdate from "../pages/nurseUpadate";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="Drlogin/DrHome" element={<DrHome />} />
          <Route path="DrLogin" element={<Doctor />} />
          <Route path="NurseLogin" element={<NurseLogin />} />
          <Route path="AdminLogin" element={<AdminstratorLogin />} />
          <Route path="AdminLogin/AdiminHome" element={<AdiminHome />} />
          <Route path="NurseLogin/NurseHome" element={<NurseHome />} />
          <Route path="AdminLogin/AdiminHome/Workers" element={<Workers />} />
          <Route
            path="AdminLogin/AdiminHome/Workers/AllDoctor"
            element={<AllDoctor />}
          />
          <Route
            path="AdminLogin/AdiminHome/Workers/RegDr/AllDoctor"
            element={<AllDoctor />}
          />
          <Route
            path="AdminLogin/AdiminHome/Workers/RegDr"
            element={<RegDr />}
          />
          <Route
            path="AdminLogin/AdiminHome/Workers/NurseReg"
            element={<NurseReg />}
          />
          <Route
            path="AdminLogin/AdiminHome/Workers/AllNurse"
            element={<AllNurse />}
          />
          <Route
            path="NurseLogin/NurseHome/PatientReg"
            element={<PatientReg />}
          />
          <Route
            path="NurseLogin/NurseHome/PatientInfo"
            element={<PatientInfo />}
          />
          <Route
            path="AdminLogin/AdiminHome/PatientInfo"
            element={<PatientInfo />}
          />
          <Route
            path="NurseLogin/NurseHome/PatientInfo/PatientUpdate/:id"
            element={<PatientUpdate />}
          />
          <Route
            path="NurseLogin/NurseHome/PatientInfo/PatientUpdate/:id/PatientInfo"
            element={<PatientInfo />}
          />

          <Route
            path="NurseLogin/NurseHome/PatientReg/PatientInfo"
            element={<PatientInfo />}
          />
          <Route
            path="AdminLogin/AdiminHome/Workers/AllDoctor/DoctorUpdate/:id"
            element={<DoctorUpdate />}
          />
          <Route
            path="AdminLogin/AdiminHome/Workers/AllNurse/NurseUpdate/:id"
            element={<NurseUpdate />}
          />
          <Route
            path="AdminLogin/AdiminHome/PatientInfo"
            element={<PatientInfo />}
          />
          <Route path="Drlogin/DrHome/PatientInfo" element={<PatientInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

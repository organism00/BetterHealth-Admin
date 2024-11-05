import React from "react";

import { Routes, Route } from "react-router-dom";
import {
  AdminDashboard,
  AdmittedPatients,
  DoctorList,
  NewDoctor,
  DoctorDetails,
  PatientStat,
  RecentQuestions,
  RecoveryStat,
  Reports,
  TotalPatientsStat,
} from "../Pages";
// import { DoctorLogin, AdminLogin, NurseLogin, Login, StaffLogin} from "../Pages"
import CheckTest from "../Pages/SuperAdmin/CheckTest";
import DoctorLogin from "../Pages/Login/DoctorLogin";
import AdminLogin from "../Pages/Login/AdminLogin";
import NurseLogin from "../Pages/Login/NurseLogin";
import Login from "../Pages/Login/Login";
import StaffLogin from "../Pages/Login/StaffLogin";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="admindashboard" element={<AdminDashboard />} />
        <Route path="admittedPatient" element={<AdmittedPatients />} />
        <Route path="doctorlist" element={<DoctorList />} />
        <Route path="newdoctor" element={<NewDoctor />} />
        <Route path="doctordetails" element={<DoctorDetails />} />
        <Route path="patientstat" element={<PatientStat />} />
        <Route path="recentquestions" element={<RecentQuestions />} />
        <Route path="recoverystat" element={<RecoveryStat />} />
        <Route path="reports" element={<Reports />} />
        <Route
          path={"totalpatientstat"}
          element={<TotalPatientsStat />}
        ></Route>
        <Route path={"checktest"} element={<CheckTest />}></Route>
        <Route path="/doctorlogin" element={<DoctorLogin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/nurselogin" element={<NurseLogin />} />
        <Route path="/stafflogin" element={<StaffLogin />} />
      </Routes>
    </>
  );
};
export default AppRoutes;

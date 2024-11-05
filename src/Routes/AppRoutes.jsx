import React from "react";

import { Routes, Route } from "react-router-dom";
import { AdminDashboard, AdmittedPatients, DoctorList, NewDoctor, DoctorDetails, PatientStat, RecentQuestions, RecoveryStat, Reports, TotalPatientsStat } from "../Pages";
import CheckTest from "../Pages/SuperAdmin/CheckTest";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
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
        <Route
          path={"checktest"}
          element={<CheckTest/>}
        ></Route>
      </Routes>
    </>
  );
};
export default AppRoutes;

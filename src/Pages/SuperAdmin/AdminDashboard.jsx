import React from "react";
// Images
import lab from "../../Assets/Images/laboratory.png";
import patient from "../../Assets/Images/patients.svg";
import staff from "../../Assets/Images/Staffs.svg";
import surgery from "../../Assets/Images/sugery.svg";
import Revenue from "../../Assets/Images/profit-up.png";
import Deathrate from "../../Assets/Images/death-rate.png";
// Components
import PatientStat from "./PatientStat";
import RecoveryStat from "./RecoveryStat";
import TotalPatientsStat from "./TotalPatientsStat";
import Reports from "./Reports";
import DoctorList from "../../Components/Doctor/DoctorList";
import AdmittedPatients from "./AdmittedPatients";
import RecentQuestions from "./RecentQuestions";
import SideBar from "../../Components/SideBar";
import Navbar from "../../Components/Navbar";

const AdminDashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-2 lg:flex-row py-4 md:px-0 ">
        <div className="">
          <SideBar />
        </div>

        <Navbar />

        <div className="mt-16 md:mt-20 md:px-6 lg:px-0">
          {/* <div className="bg-white border-lg text-[#172b4c] shadow flex flex-col md:flex-row p-4 items-center justify-center gap-2 rounded-lg border ">
            <img src={heart} alt="img" className="max-w-[135px] w-auto" />
            <div>
              <h1 className="text-[24px] leading-7 ">
                Today - 20% Discount on Lung Examinations
              </h1>
              <p className="text-[14px] ">
                The Package price includes: consultation of a pulmonolgist,
                spirogrphy, cardiogram
              </p>
            </div>
            <div className="w-[112px] h-[42px] ">
              <button className="bg-[#5156be] text-white w-[112px] h-[42px] rounded-md ">
                Know More
              </button>
            </div>
          </div> */}

          {/* Summry of numbers 1 */}
          <div className="flex flex-col md:flex-row gap-4 my-4 justify-between">
            <div className="flex justify-center p-6 rounded-lg bg-white shadow gap-4 border">
              <img
                src={patient}
                alt="patient-image"
                className="max-w-[110px] h-auto w-auto md:w-[80px] "
              />
              <div>
                <p className="text-[18px] ">Total Patience</p>
                <h1 className="text-[24px] ">1245</h1>
              </div>
            </div>

            <div className="flex justify-center p-6 rounded-lg bg-white shadow gap-4 border">
              <img
                src={staff}
                alt="staff-image"
                className="max-w-[110px] h-auto w-auto md:w-[80px] "
              />
              <div>
                <p className="text-[18px] ">Total Staffs</p>
                <h1 className="text-[24px] ">145</h1>
              </div>
            </div>

            <div className="flex justify-center p-6 rounded-lg bg-white shadow gap-4 border">
              <img
                src={surgery}
                alt="surgery-image"
                className="max-w-[110px] h-auto w-auto md:w-[80px] "
              />
              <div>
                <p className="text-[18px] ">Recovery Rate</p>
                <h1 className="text-[24px] ">245</h1>
              </div>
            </div>
          </div>

          {/* Summry of numbers 2 */}
          <div className="flex flex-col md:flex-row gap-4 my-4 justify-between">
            <div className="flex justify-center p-6 rounded-lg bg-white shadow gap-4 border">
              <img
                src={lab}
                alt="patient-image"
                className="max-w-[110px] h-auto w-auto md:w-[80px] "
              />
              <div>
                <p className="text-[18px] ">Lab Tests</p>
                <h1 className="text-[24px] ">1245</h1>
              </div>
            </div>

            <div className="flex justify-center p-6 rounded-lg bg-white shadow gap-4 border">
              <img
                src={Deathrate}
                alt="staff-image"
                className="max-w-[110px] h-auto w-auto md:w-[80px] "
              />
              <div>
                <p className="text-[18px] ">Death Rate</p>
                <h1 className="text-[24px] ">15</h1>
              </div>
            </div>

            <div className="flex justify-center p-6 rounded-lg bg-white shadow gap-4 border">
              <img
                src={Revenue}
                alt="surgery-image"
                className="max-w-[110px] h-auto w-auto md:w-[80px] "
              />
              <div>
                <p className="text-[18px] ">Revenue</p>
                <h1 className="text-[24px] ">₦100,000,000</h1>
              </div>
            </div>
          </div>

          <AdmittedPatients  className="mt-4"/>

          {/* Charts */}
          <div className="flex flex-col mt-6 md:mt-4 md:flex-row  md:space-x-4 space-y-5 md:space-y-0 justify-between">
            <PatientStat />
            <RecoveryStat />
          </div>

          <div className="mt-4 flex md:flex-row flex-col  space-y-6 md:space-y-0 justify-between">
            <RecentQuestions />
            <RecentQuestions />
          </div>
        </div>
        <div className="lg:flex lg:flex-col lg:gap-4 md:px-6 lg:px-0 space-y-10 lg:space-y-4 mt-4 lg:mt-20">
          <TotalPatientsStat />
          <Reports />
          <DoctorList />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

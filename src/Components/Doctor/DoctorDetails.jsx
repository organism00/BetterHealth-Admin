import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../SideBar";
import Navbar from "../Navbar";
import axios from "axios";
import { patientData } from "../Patient/PatientData";
import "../../Style/customScrollbar.css";

import { GoHome } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaGreaterThan } from "react-icons/fa6";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaCalendarAlt } from "react-icons/fa";
import coverImage from '../../assets/Images/istockphoto-1 (17).jpg'
import { IoMdTime } from "react-icons/io";
import { FaStethoscope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

// Components
import AssignedPatient from "./AssignedPatinet";
import RecentQuestions from "../../Pages/SuperAdmin/RecentQuestions";
import ReviewList from "./ReviewList";
import DoctorAbility from "./DoctorAbility";

const DoctorDetails = () => {
  const location = useLocation();
  const doctorId = location.state;
  console.log(doctorId);
  const [doctor, setDoctor] = useState({});

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await axios.get(`https://hms-w4kw.onrender.com/api/Doctor/GetDoctorById/172eeed7-1b77-483b-bd85-fcb59272ccde`)
        console.log(response.data.data)
        setDoctor(response.data.data)
      } catch(error){
        console.log(error.response)
      }
    }
    fetchDoctorData()
  }, [doctorId])
  console.log(doctor);
  return (
    <div className="flex flex-col gap-2 lg:flex-row py-4  md:px-0">
      <SideBar />

      <Navbar />

      <div className="mt-16 md:px-6 lg:px-0 h-[200vh] md:w-[80vw]">
        <div className="flex my-10 md:my-8 justify-between">
          <div className="flex gap-x-5 px-4 lg:px-0 md:px-8 md:ml-64 lg:ml-0">
            <h1 className="text-2xl">Doctor Details</h1>
            <div className="flex gap-2 items-center">
              <GoHome />
              <p className="font-thin"> - Doctor Details</p>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col pb-20 md:space-x-6 space-y-6 md:space-y-0">
          {/*Doctor Details left Section Start */}
          <div className="flex flex-col space-y-6">
            {/*Today's Patient */}
            <div className="w-[90vw] mx-auto lg:w-[30vw] pt-4 pb-10 border shadow-md shadow-gray-300 font-[inter] rounded-lg">
              <div className="flex pb-4 items-center px-6 justify-between">
                <p className="text-xl font-[inter]">Your Patients Today</p>

                <NavLink className="flex items-center font-[500] text-sm text-blue-600">
                  All Patients
                  <FaGreaterThan className="ml-2 mt-1" />
                </NavLink>
              </div>
              <hr />

              <div className="scrollable-div h-[320px] md:h-[260px] mt-4 overflow-auto font-[inter]">
                <div className="space-y-4">
                  {patientData.map((patient, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-between items-center w-[100%] h-[100%] px-6"
                      >
                        <p className="text-[18px] font-[500] font-[inter]">
                          {patient.time}
                        </p>

                        <div className="w-[70%] px-2 bg-gray-100 flex items-center justify-between rounded-lg">
                          <div className="w-[90%] flex items-center space-x-4">
                            <img
                              className="w-8 h-8 rounded-full cursor-pointer"
                              src={patient.img}
                              alt={`{patient.name}'s thumbnail`}
                            />
                            <div className=" py-2  rounded-md flex flex-col justify-between ">
                              <span className="text-lg font-[500]">
                                {patient.name}
                              </span>
                              <p className="text-[#808080]">
                                Diagnosis: {patient.disease}
                              </p>
                            </div>
                          </div>

                          <HiOutlineDotsVertical className="w-[20px] h-[20px] cursor-pointer" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Appointments */}

            <div className="w-[90vw] mx-auto lg:w-[30vw] py-6 border shadow-md shadow-gray-300 font-[inter] rounded-lg">
              <div className="px-4 pb-4 ">
                <p className="text-xl font-[inter]">Appointments</p>
              </div>
              <hr />

              <div className="flex justify-center my-8">
                <div className="w-[30px] h-[80px] shadow-sm hover:text-white hover:bg-[rgba(0,0,139,0.92)]">
                  <GrFormPrevious className="w-8 h-8 mx-auto my-6" />
                </div>
                <div className="flex font-[inter]">
                  <div className="w-[40px] md:w-[50px] h-[80px] bg-gray-200 shadow-sm hover:text-white hover:bg-[rgba(0,0,139,0.92)] py-4 text-sm text-gray-500 text-center">
                    Sun
                    <p>13th</p>
                  </div>
                  <div className="w-[40px] md:w-[50px] h-[80px] shadow-sm hover:text-white hover:bg-[rgba(0,0,139,0.92)] py-4 text-sm text-gray-500 text-center">
                    Mon
                    <p>14th</p>
                  </div>
                  <div className="w-[100px] md:w-[150px] p-2 h-[80px] text-white bg-[#0f5032f1] hover:bg-[rgba(0,0,139,0.92)]">
                    <FaCalendarAlt className="float-end " />
                    <p className="text-sm text-center mt-4">Tuesday</p>
                    <p className="text-sm text-center">October 15th 2024</p>
                  </div>
                  <div className="w-[40px] md:w-[50px] h-[80px] shadow-sm hover:text-white hover:bg-[rgba(0,0,139,0.92)] py-4 text-sm text-gray-500 text-center">
                    Wed
                    <p>16th</p>
                  </div>
                  <div className="w-[40px] md:w-[50px] h-[80px] shadow-sm hover:text-white hover:bg-[rgba(0,0,139,0.92)] py-4 text-sm text-gray-500 text-center">
                    Thu
                    <p>17th</p>
                  </div>
                </div>

                <div className="w-[30px] h-[80px] shadow-sm hover:text-white hover:bg-[rgba(0,0,139,0.92)]">
                  <MdNavigateNext className="w-8 h-8 mx-auto my-6 " />
                </div>
              </div>

              <div className="scrollable-div h-[280px] mt-4 overflow-auto font-[inter]">
                <div className="space-y-4">
                  {/* {doctorsList.map((doctor) => {
                    return (
                      <div
                        key={doctor.time}
                        className="w-[100%] h-[100%] py-2 px-6 border shadow-sm"
                      >
                        <div className="w-[100%] px-2 flex items-center justify-between">
                          <div className="w-[90%] flex items-center">
                            <img
                              className="w-20 h-20 rounded-full cursor-pointer hover:border object-cover"
                              src={doctor.thumb}
                              alt={`{doctor.name}'s thumbnail`}
                            />
                            <div className=" py-2  rounded-md flex flex-col justify-between ">
                              <p className="text-lg text-[#2d2d2d] font-[600] leading-6">
                                {doctor.name}
                              </p>

                              <p>{doctor.title}</p>
                            </div>
                          </div>

                          <NavLink className="flex items-center w-[45px] h-[45px] cursor-pointer  bg-[#C8C9EE] text-[#5156BE] hover:bg-[#5156BE] hover:text-white transition-all ease-in-out hover:duration-[1000ms] text-[15px] rounded-full">
                            <FaPhone className="mx-auto" />
                          </NavLink>
                        </div>

                        <div className="flex items-center justify-between mx-4">
                          <div className="flex mt-2 items-center space-x-6 ml-8">
                            <p className="text-[18px] font-[500] font-[inter]">
                              {doctor.time}
                            </p>

                            <p>$30</p>
                          </div>

                          <HiOutlineDotsHorizontal className="w-6 h-6" />
                        </div>
                      </div>
                    );
                  })} */}
                </div>
              </div>
              <NavLink to={'/doctorappointment'} className="px-6 py-2">
                <button className="w-[88%] mt-4 bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700 transition">
                  View Doctors Appointment
                </button>
              </NavLink>
            </div>

            {/* Doctor Ability */}
            <div className="w-[90vw] mx-auto lg:w-[30vw] pt-6 pb-10 border shadow-md shadow-gray-300 font-[inter] rounded-lg">
              <div className="px-4 pb-4 ">
                <p className="text-xl font-[inter]">Doctor Ability</p>
              </div>
              <hr />

              <div className="py-4">
                <DoctorAbility />
              </div>
            </div>

            {/* Recovery Rate */}
            <div className="w-[90vw] mx-auto lg:w-[30vw]  pt-6 pb-10 border shadow-md shadow-gray-300 font-[inter] rounded-lg">
              <div className="px-4 pb-4 ">
                <p className="text-xl font-[inter]">Recovery rate</p>
              </div>
              <hr />

              <div className="flex flex-col space-y-4 p-4">
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <p className="text-xl">80 %</p>
                    <p className="text-lg">Cold</p>
                  </div>

                  <div className="w-[100%] h-2 bg-[#E9ECEF] rounded-r-full">
                    <p className="w-[80%] h-2 bg-[#5156BE] rounded-l-full"></p>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <p className="text-xl">24 %</p>
                    <p className="text-lg">Fracture</p>
                  </div>

                  <div className="w-[100%] h-2 bg-[#E9ECEF] rounded-r-full">
                    <p className="w-[24%] h-2 bg-[#05825F] rounded-l-full"></p>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <p className="text-xl">91 %</p>
                    <p className="text-lg">Ache</p>
                  </div>

                  <div className="w-[100%] h-2 bg-[#E9ECEF] rounded-r-full">
                    <p className="w-[91%] h-2 bg-[#3596F7] rounded-l-full"></p>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <p className="text-xl">50 %</p>
                    <p className="text-lg">Hematoma</p>
                  </div>

                  <div className="w-[100%] h-2 bg-[#E9ECEF] rounded-r-full">
                    <p className="w-[50%] h-2 bg-[#EE3158] rounded-l-full"></p>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <p className="text-xl">72 %</p>
                    <p className="text-lg">Caries</p>
                  </div>

                  <div className="w-[100%] h-2 bg-[#E9ECEF] rounded-r-full">
                    <p className="w-[72%] h-2 bg-[#FFA800] rounded-l-full"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Details Right section starts Here */}
          <div className="flex flex-col space-y-6">
            {/* Profile Card start*/}
            <div className="w-[90vw] mx-auto lg:w-[50vw] pb-8  border shadow-md shadow-gray-300 font-[inter] rounded-lg">
              <div
                className={`profileCard w-[100%] h-[20vh] rounded-lg rounded-b-[20px] bg-gray-300 bg-center z-0`}
              ></div>
              <div className="flex justify-between px-4 md:px-8">
                <div className=" -mt-16 z-30">
                  <img
                    className="w-32 h-32 md:w-44 md:h-48 rounded-lg object-cover"
                    src={coverImage}
                    alt="coverImage"
                  />

                  <div>
                    <p className="text-xl">{doctor.firstname} {doctor.lastname}</p>
                    <div className="flex items-center space-x-1 text-gray-700">
                      <IoMdTime className="w-8 h-8 md:w-4 md:h-4" />
                      <p>Joined on {doctor.joiningDate}</p>
                    </div>
                  </div>
                </div>
                <div className="w-[90%] md:w-40 h-12 px-2 -mt-[145px] flex items-center space-x-2 justify-center text-lg rounded-[10px] text-white bg-[#0f5032f1]">
                  <FaStethoscope />
                  <p>{doctor.specialization}</p>
                </div>
              </div>

              <div className="mt-10 md:mt-16 px-8 space-y-5">
                <p className="text-2xl text-[#172B4C]">Biography</p>
                <div className="space-y-2 text-[16px] leading-6 text-[#172B4C]">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugit repellat cum vel ipsum quis mollitia eaque ullam
                    perferendis architecto minima dicta assumenda, sint quam,
                    quia tenetur blanditiis in amet atque suscipit, est minus
                    unde. Pariatur officiis assumenda, iusto placeat dolor porro
                    corrupti rerum fugit in culpa reiciendis nemo? Vitae, iure.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi tempora molestiae nulla. Est hic error ratione officiis
                    fugit nihil reprehenderit at facere doloribus earum quas
                    nemo, impedit nesciunt pariatur officia, qui dignissimos
                    totam iusto, ad eius. Blanditiis eum commodi molestiae
                    tempore animi vero doloribus cumque, officiis, ea obcaecati
                    inventore ipsam!
                  </p>
                </div>
              </div>
            </div>

            {/* Assigned Patient */}

            <div className="w-[90vw] mx-auto lg:w-[50vw] py-4 border shadow-md shadow-gray-300 font-[inter] rounded-lg">
              <div className="px-8 pb-4 ">
                <p className="text-xl font-[inter]">Assigned Patient</p>
              </div>
              <hr />

              <div>
                <AssignedPatient />
              </div>
            </div>

            {/* Recent Review */}
            <div className="w-[90vw] mx-auto lg:w-[50vw] py-4 border shadow-sm shadow-gray-300 font-[inter] rounded-lg">
              <ReviewList />
            </div>

            {/* Recent Questions and Laboratory Tests */}
            <div className="w-[90vw] flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-10 mx-auto lg:w-[50vw] rounded-lg border shadow-sm shadow-gray-300 font-[inter]">
              <RecentQuestions />
              <RecentQuestions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;

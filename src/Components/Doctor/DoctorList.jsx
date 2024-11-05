import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, Link, useNavigate } from "react-router-dom";
// import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { GoHome } from "react-icons/go";

// Components
import SideBar from "../SideBar";
import Navbar from "../Navbar";
import { RiArrowDropDownLine } from "react-icons/ri";

// Css
import "../../Style/customScrollbar.css";

// images
import doc1 from "../../Assets/Images/doc1.png";
import doc2 from "../../Assets/Images/doc2.png";
import doc3 from "../../Assets/Images/doc3.png";
import doc4 from "../../Assets/Images/doc4.png";
import doc5 from "../../Assets/Images/doc5.png";

const doctorList = [
  { id: 1, name: "Dr. Jaylon Stanton", position: "Dentist", image: doc1 },
  { id: 2, name: "Dr. Carla Schleifer", position: "Oculist", image: doc2 },
  { id: 3, name: "Dr. Hanna Geidt", position: "Surgeon", image: doc3 },
  {
    id: 4,
    name: "Dr. Roger George",
    position: "General Practitioner",
    image: doc4,
  },
  { id: 5, name: "Dr. Natalie Doe", position: "Physician", image: doc5 },
];

function DoctorList() {
  const navigate = useNavigate()
  const [openDoctorsMenu, setOpenDoctorsMenu] = useState(false);
  const [id, setId] = useState(null);
  const [doctor, setDoctor] = useState([]);
  
  useEffect(() => {
    const fetchDoctor = async () => {
      try{
        const res = await axios.get('https://hms-w4kw.onrender.com/api/Doctor/GetDoctors')
        setDoctor(res.data.$values)
        console.log(res.data.$values)
      } catch(error){
          console.log(error.response)
      }
    }
    fetchDoctor()
  }, [])

  const toggleDoctorsMenu = (item) => {
    setOpenDoctorsMenu(!openDoctorsMenu);
    setId(item);
  };
  return (
    <div className="flex flex-col gap-2 lg:flex-row py-4 md:px-0 ">
      <SideBar />
      <Navbar />
      <div className='flex justify-center w-[100%] '>
        <section className='mt-28 lg:mx-10 my-10 grid justify-center '>
          <div className='flex justify-between'>
            <div className='flex gap-x-5 px-5 lg:px-0 md:px-8 md:ml-64 lg:ml-0'>
              <h1 className="text-2xl">Doctors</h1>
              <div className="flex gap-2 items-center">
                <Link to='/admindashboard'><GoHome/></Link>
                <p className="font-thin"> - Doctors</p>
              </div>
            </div>
            <div className='flex gap-2'>
              <input type="text" className='md:w-[350px] border px-4 rounded' />
              <button className='bg-[#5156be] text-white px-4 rounded '>Search</button>
            </div>
          </div>

          <div className='py-5 md:ml-72 lg:ml-0 gap-x-10 grid grid-cols-1 lg:grid-cols-3 gap-y-10 '>
            {doctor.map(doctor => {
              return (
                <div
                  onClick={() => navigate('/doctordetails', {state: doctor.doctorId})}
                  key={doctor.$id}
                  className="w-[250px] overflow-hidden shadow-2xl border border-stone-100 rounded-lg bg-white"
                >
                  <div className="flex justify-center flex-col items-center h-[200px] w-[100%] ">
                    <img
                      src={doctor.image}
                      alt="image"
                      className="w-100% h-[100%] object-cover "
                    />
                  </div>
                  <div className="text-2xl text-white font-medium bg-primary2 flex flex-col items-center p-2 ">
                    <p className="">{doctor.firstname} {doctor.lastname}</p>
                    <p className="font-medium text-sm text-gray-300">
                      {doctor.specialization}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>   
        </section>
      </div>
    </div>
  );
}

export default DoctorList;

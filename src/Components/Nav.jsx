import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import user from "../assets/Images/user.svg";
import { BiSolidNotification } from "react-icons/bi";
import { PiGearFill } from "react-icons/pi";
import { RiLogoutCircleLine } from "react-icons/ri";

const Nav = () => {
  const [userData] = useState(JSON.parse(localStorage.getItem("userData")));
  // console.log(userData)
  // const navigate = useNavigate();

  // const handleLogOut = () => {
  //   localStorage.removeItem("userData");
  //   navigate("/");
  // };
  return (
    <>
      <nav className="hidden bg-[yellow] lg:w-[82vw] h-[10vh] fixed top-20 md:top-0  z-50 lg:flex justify-between items-center">
        <div className="bg-red-500">
          <button className="w-11 h-11">
            <IoMenu className="text-2xl mx-auto" />
          </button>
        </div>

        <div className="flex justify-between items-center space-x-7">
          <div className="flex items-center space-x-2">
            <div>
              <h1 className="cursor-pointer text-indigo-500 font-bold text-sm lg:text-base">
                {userData.firstname} {userData.lastname}
              </h1>
              <p className="text-end font-thin text-[10px]">SUPER ADMIN</p>
            </div>

            <img
              className="w-8 h-8 lg:w-10 lg:h-10 cursor-pointer bg-indigo-300 rounded-md"
              src={user}
              alt="user"
            />
          </div>

          <div className="flex items-center space-x-3">
            <div className="px-2 py-1 cursor-pointer bg-indigo-300 rounded-md mx-auto">
              <RiLogoutCircleLine className="text-2xl mx-auto text-orange-400" />
            </div>
            <div className="px-2 py-1 cursor-pointer bg-indigo-300 rounded-md mx-auto">
              <BiSolidNotification className="text-2xl mx-auto text-orange-400" />
            </div>
            <div className="px-2 py-1 cursor-pointer bg-indigo-300 rounded-md mx-auto">
              <PiGearFill className="text-2xl mx-auto text-orange-400" />
            </div>
          </div>
        </div>

        {/* <div className="flex items-center gap-3">
          <div className="flex justify-center flex-col">
            <h1 className="text-indigo-500 font-bold text-sm lg:text-base w-[60px] lg:w-auto">
              Adegbenga Oluwatosin
            </h1>
            <p className="text-end font-thin text-[10px]">SUPER ADMIN</p>
          </div>
          <div ">
            <img src={user} alt="" className="rounded-md" />
          </div>
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-indigo-50 rounded-md flex items-center justify-center cursor-pointer">
            <RiLogoutCircleLine className="text-2xl text-orange-400" />
          </div>
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-indigo-50 rounded-md flex items-center justify-center">
            <BiSolidNotification className="text-2xl text-blue-400" />
          </div>
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-indigo-50 rounded-md flex items-center justify-center">
            <PiGearFill className="text-2xl text-pink-300" />
          </div>
        </div> */}
      </nav>
    </>
  );
};

export default Nav;

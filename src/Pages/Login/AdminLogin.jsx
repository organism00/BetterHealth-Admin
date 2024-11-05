import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import hospital1 from "../../assets/images/a.jpg";
import hospital3 from "../../assets/images/b.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "../../Components/Loaders/ToastContext";
import WaitingLoader from "../../Components/Loaders/WaitingLoader";

import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Style/loader.css";

const AdminLogin = () => {
  const { notifySuccess, notifyError, startWaitingLoader, stopWaitingLoader } =
    useToast();

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    TransitionEvent: "ease-in-out",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jobRole, setJobRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    startWaitingLoader();
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://hms-w4kw.onrender.com/api/Staff/StaffLogin",
        { email, password, jobRole }
      );
      notifySuccess(response.data.responseMessage);
      stopWaitingLoader();
      navigate("/admindashboard");
      localStorage.setItem("userData", JSON.stringify(response.data.data));
      // console.log(response.data.responseMessage);
    } catch (error) {
      notifyError(error.response.data.responseMessage);
      stopWaitingLoader();
      // console.error(error.response.data);
    }
  };

  return (
    <div className="lg:h-[100vh] bg-[whitesmoke] flex items-center overflow-hidden">
      {/* Loader */}
      <WaitingLoader />
      {/* Left - Image Slider */}
      <div className="hidden lg:block xl:h-[100%] w-[50vw]">
        <Slider {...sliderSettings}>
          <div>
            <img
              src={hospital1}
              alt="hospital1"
              className="h-screen w-full object-cover "
            />
          </div>
          <div>
            <img
              src={hospital3}
              alt="hospital3"
              className="h-screen w-full object-cover "
            />
          </div>
        </Slider>
      </div>

      {/* Right - Form */}
      <div className="w-full lg:w-[50vw] bg-[whitesmoke] md:py-2 md:h-[100vh] md:px-24 flex flex-col justify-center py-2 px-4 ">
        <div className="max-w-md w-full mx-auto">
          <div className=" space-y-6 mb-8 ">
            <h2 className="text-3xl leading-4 font-[inter] font-semibold">
              Holla,
            </h2>
            <p className=" text-3xl leading-10 font-[inter] font-semibold">
              Welcome Back Admin!
            </p>
            <p className="text-gray-600 leading-4 font-[inter] mt-2">
              Welcome back! Enter your credentials to login as Admin.
            </p>
          </div>

          <form action="" className="space-y-6" onSubmit={handleLogin}>
            {/* Username Field */}
            <input
              className="w-full h-[55px] text-xl pl-4 font-[inter] rounded-[12px] font-medium border outline-[#483d8b]"
              type="text"
              placeholder="Job role"
              name={jobRole}
              id="jobrole"
              onChange={(e) => setJobRole(e.target.value)}
            />

            <input
              className="w-full h-[55px] text-xl pl-4 font-[inter] rounded-[12px] font-medium border outline-[#483d8b]"
              type="text"
              placeholder="Email"
              name={email}
              id="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="w-full h-[55px] text-xl pl-4 font-[inter] rounded-[12px] font-medium border outline-[#483d8b]"
              placeholder="Password"
              type="password"
              name={password}
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex flex-row justify-between">
              <div className="flex items-center space-x-1">
                <input className="w-4 h-4" type="checkbox" name="" id="" />
                <label className="font-[inter] text-md" htmlFor="remember">
                  Remember Me
                </label>
              </div>

              <NavLink
                to="/forgot-password"
                className="text-md transition-colors duration-300"
              >
                Forgot Password?
              </NavLink>
            </div>

            <button
              type="submit"
              className="w-[50%] py-3 px-4 text-white text-lg rounded-lg bg-[#483d8b] hover:bg-[rgba(72,61,139,0.9)] focus:ring-4 focus:ring-[#483d8b] focus:ring-opacity-50 font-[inter] font-semibold transition-colors duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

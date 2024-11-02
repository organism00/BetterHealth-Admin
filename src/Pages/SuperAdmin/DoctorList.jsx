import React, { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

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
  const [openDoctorsMenu, setOpenDoctorsMenu] = useState(false);
  const [id, setId] = useState(null);

  const toggleDoctorsMenu = (item) => {
    setOpenDoctorsMenu(!openDoctorsMenu);
    setId(item);
  };
  return (
    <div>
      <div className="shadow-lg pt-4 rounded-lg border h-[400px] ">
        <div className="mb-4 pb-4 px-8 border-b w-[100% text-[18px] text-[#172b4c] flex items-center justify-between ">
          <p className="text-[18px] text-[#172b4c] font-medium ">Doctor List</p>
          <p className="text-[14px] text-[#172b4c]">Today</p>
        </div>

        <div className="scrollable-div h-[300px]">
          {doctorList.map((item) => {
            return (
              <div key={item.id} className="flex gap-2 p-4 mx-2 relative ">
                <div className="bg-secondary rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[54px] object-cover "
                  />
                </div>
                <div className="w-[150px] text-left">
                  <h1 className="text-[16px] ">{item.name}</h1>
                  <p className="text-[14px] text-[#7e8299] ">{item.position}</p>
                </div>
                <HiOutlineDotsHorizontal
                  className="text-[25px] text-[#7e8299] cursor-pointer "
                  onClick={() => toggleDoctorsMenu(item.id)}
                />

                {id === item.id && openDoctorsMenu ? (
                  <div className="shadow-lg px-6 py-4 rounded-lg border absolute right-0 top-12 bg-white text-[14px] text-left grid gap-4 w-[150px] z-10 ">
                    <p>Inbox</p>
                    <p>Sent</p>
                    <p>Spam</p>
                    <p>Draft</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DoctorList;

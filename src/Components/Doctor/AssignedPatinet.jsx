import React from "react";
import Chart from "react-apexcharts";
import coverImage from "../../assets/Images/istockphoto-1 (17).jpg";



// Chart configuration
const chartOptions = {
  chart: {
    sparkline: { enabled: true },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  colors: ['#2ca02c'],
  tooltip: {
    enabled: false,
  },
  grid: { show: false },
  xaxis: { show: false },
  yaxis: { show: false },
};

const chartData = {
  series: [{
    data: [10, 15, 13, 20, 17, 19, 25, 22] // Example data
  }]
};


const AssignedPatient = () => {
  return (
    <div className="flex md:flex-row flex-col items-center md:space-x-10 px-8 py-8">
      {/* Patient Info */}
      <div className="flex flex-col md:flex-row items-center space-x-4">
        <img
          src={coverImage} // Replace with real image
          alt="Patient"
          className="w-32 h-32 object-cover"
        />
      </div>

      <div className="flex flex-col space-y-4">
        <div className="text-center mt-2 md:text-start">
          <h2 className="text-lg text-gray-600">Loky Doe</h2>
          <p className="text-[#5156BE] text-[14px]">Cold & Flu</p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-3 mx-auto">
          <button className="w-auto h-8 px-2 rounded-md  bg-[#C8C9EE] text-[#5156BE] hover:bg-[#5156BE] hover:text-white transition-all ease-in-out hover:duration-[1000ms] text-[15px]">
            Unassign
          </button>
          <button className="w-auto h-8 px-2 rounded-md bg-[#FFD6DE] text-[#EE3158] hover:bg-[#EE3158] hover:text-white transition-all ease-in-out hover:duration-[1000ms] text-[15px]">
            Improvement
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="flex items-center space-x-2">
        <Chart
          options={chartOptions}
          series={chartData.series}
          type="line"
          width="100"
          height="50"
        />
        <div className="text-green-600 font-semibold text-sm">10%</div>
      </div>
    </div>
  );
};

export default AssignedPatient;

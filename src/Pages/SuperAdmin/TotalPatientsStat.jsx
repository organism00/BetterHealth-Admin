import React from 'react';
import { Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart } from 'recharts';

const totalPatient = [
  { month: 'Dec 31', TotalPatient: 440, Discharged: 223, },
  { month: 'Jan 1', TotalPatient: 505, Discharged: 242, },
  { month: 'Jan 2', TotalPatient: 414, Discharged: 235, },
  { month: 'Jan 3', TotalPatient: 671, Discharged: 327, },
  { month: 'Jan 4', TotalPatient: 227, Discharged: 143, },
  { month: 'Jan 5', TotalPatient: 413, Discharged: 322, },
  { month: 'Jan 6', TotalPatient: 201, Discharged: 117, },
  { month: 'Jan 7', TotalPatient: 352, Discharged: 131, },
  { month: 'Jan 8', TotalPatient: 752, Discharged: 422, },
  { month: 'Jan 9', TotalPatient: 320, Discharged: 222, },
  { month: 'Jan 10', TotalPatient: 257, Discharged: 112, },
  { month: 'Jan 11', TotalPatient: 160, Discharged: 116, }
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className='bg-white border text-[10px] rounded-lg'>
        <p className='font-bold py-2 border-b mb-1 px-4'>{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }} className='py-2 px-4 -mt-2 font-semibold '>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

function TotalPatientsStat() {
  return (
    <div>
      <div className='shadow-lg pb-12 mt-4 rounded-lg border'>
        <p className='mb-4 py-4 px-8 border-b w-[100%] text-[18px] text-[#172b4c] font-medium '>Total Patient</p>
        <ComposedChart width={272} height={250} data={totalPatient} className='lg:mr-4 lg:-ml-4'>
          <CartesianGrid horizontal={true} vertical={false} opacity={'50%'} />
          <XAxis dataKey="month" axisLine={false} opacity={'60%'} fontSize='10px' />
          <YAxis axisLine={false} tickLine={false} opacity={'60%'} />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" align="right" iconType="circle" />
          <Bar dataKey="TotalPatient" stackId="a" fill="rgba(231, 228, 255, 1)" barSize={6} />
          <Line type="monotone" dataKey="Discharged" stroke="rgb(81, 86, 190)" strokeWidth={4} dot={false} />
        </ComposedChart>
      </div>
    </div>
  )
}

export default TotalPatientsStat
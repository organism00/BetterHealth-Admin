import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const patientStat = [
  { month: 'Jan', OPD: 76, Admitted: 44 },
  { month: 'Feb', OPD: 85, Admitted: 55 },
  { month: 'Mar', OPD: 101, Admitted: 57 },
  { month: 'Apr', OPD: 98, Admitted: 56 },
  { month: 'May', OPD: 87, Admitted: 61 }, 
  { month: 'Jun', OPD: 105, Admitted: 58 },
  { month: 'Jul', OPD: 91, Admitted: 63 }
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

function PatientStat() {
  return (
    <div>
      <div className='shadow-lg pb-12 pt-2 rounded-lg border '>
        <p className='mb-4 py-4 px-8 border-b w-[100%] md:[50vw] lg:w-[27vw] text-[18px] text-[#172b4c] font-medium '>Patient Statistics</p>
        <BarChart width={318} height={250} data={patientStat} className='mr-4 -ml-4 pr-4 md:pr-0 w-300px' >
          <CartesianGrid horizontal={true} vertical={false} opacity={'50%'} />
          <XAxis dataKey="month" axisLine={false} opacity={'60%'} />
          <YAxis axisLine={false} tickLine={false}opacity={'60%'} />
          <Legend verticalAlign="top" align="center" iconType="square" iconSize={10} fontSize={1} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="OPD" stackId="a" fill="#5156be" barSize={6}/>
          <Bar dataKey="Admitted" stackId="a" fill="#ffa800" barSize={6} />
        </BarChart>
      </div>
    </div>
  )
}

export default PatientStat
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const recoveryStat = [
  { month: 'Jan', heart: 12, fracture: 28, cold: 17 },
  { month: 'Feb', heart: 22, fracture: 39, cold: 12 },
  { month: 'Mar', heart: 14, fracture: 23, cold: 28 },
  { month: 'Apr', heart: 18, fracture: 36, cold: 12 },
  { month: 'May', heart: 22, fracture: 45, cold: 33 },
  { month: 'Jun', heart: 13, fracture: 32, cold: 26 },
  { month: 'Jul', heart: 17, fracture: 43, cold: 23 }
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

function RecoveryStat() {
  return (
    <div>
      <div className='shadow-lg pb-12 pt-2 rounded-lg border'>
        <p className='mb-4 py-4 px-8 border-b w-[100%] md:w-[50vw] lg:w-[27vw] text-[18px] text-[#172b4c] font-medium '>Recovery Statistic</p>
        <LineChart width={318} height={250} data={recoveryStat} className='mr-4 -ml-4 pr-4 md:pr-0 '>
          <CartesianGrid horizontal={true} vertical={false} opacity={'50%'} />
          <XAxis dataKey="month" axisLine={false} opacity={'60%'} />
          <YAxis axisLine={false} tickLine={false} opacity={'60%'} />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" align="center" iconType="circle" />
          <Line type="monotone" dataKey="heart" stroke="#5156be" strokeWidth={4} dot={false} />
          <Line type="monotone" dataKey="fracture" stroke="#da123b" strokeWidth={4} dot={false} />
          <Line type="monotone" dataKey="cold" stroke="#ffa800" strokeWidth={4} dot={false} />
        </LineChart>
      </div>
    </div>
  )
}

export default RecoveryStat
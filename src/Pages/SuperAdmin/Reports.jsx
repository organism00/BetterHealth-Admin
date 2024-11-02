import React from 'react';

// Images
import door from '../../Assets/Images/door.svg';
import door2 from '../../Assets/Images/door2.svg';
import alarm from '../../Assets/Images/alarm.svg';

const reportData = [
  { id: 1, report: '2nd floor Bathroom had a broken door', time: '10 minutes ago', image: door },
  { id: 2, report: 'Brownout In the Administration Room', time: '15 minutes ago', image: alarm },
  { id: 3, report: '1st floor Bathroom had a broken Tap', time: '20 minutes ago', image: door2 }
]

function Reports() {
  return (
    <div>
      <div className='shadow-lg pt-4 rounded-lg border'>
        <p className='mb-4 pb-4 px-8 border-b w-[100% text-[18px] text-[#172b4c] font-medium '>Report</p>
        
        {reportData.map(item => {
          return (
            <div key={item.id} className='border rounded-lg flex gap-2 p-4 m-4 '>
              <img src={item.image} alt="" className='w-[54px] ' />
              <div className='w-[150px]'>
                <h1 className='text-[16px] '>{item.report}</h1>
                <p className='text-[14px] text-[#7e8299] '>{item.time}</p>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Reports
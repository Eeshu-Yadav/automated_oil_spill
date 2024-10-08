import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { colors } from '@mui/material';

const InTransit = () => {
    const  data= [
        { id: 0, value: 40, label: 'Active vessels',color:"text-green-400" },
        { id: 1, value: 15, label: 'Reached vessels' ,color:"text-sky-500"},
      ];
  return (
    <div className='flex w-fit h-fit flex-col border-gray border-2 text-center rounded-xl overflow-hidden text-white' >
      <h1 className='py-2 border-b-2 border-gray text-xl' >InTransit</h1>
      <div className='flex flex-row px-5 pb-2 bg-secondary '>
        <div className=' space-y-2'>
            {
                data.map((item)=>(<div key={item.id} className='flex items-start flex-col'>
                    <p className={`text-lg font-semibold ${item.color} `} >{item.value} %</p>
                    <p className='text-sm -mt-1'>{item.label}</p>
                </div>))
            }
        </div>
        <div className='-mr-24'><PieChart
      series={[
        {
          data: [
            { id: 0, value: 40, label: 'Active vessels',color:"#4ade80" },
            { id: 1, value: 15, label: 'Reached vessels',color:"#0ea5e9" },
          ],
        },
      ]}
      width={200}
      height={100}
      slotProps={{ legend: { hidden:true } }}
    /></div>
      </div>
    </div>
  )
}

export default InTransit

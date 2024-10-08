import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { colors } from '@mui/material';
const Pipeline = () => {
    const  data= [
        { id: 0, value: 40, label: 'Ready',color:"bg-green-400" },
        { id: 1, value: 15, label: 'Suspended' ,color:"bg-sky-500"},
        { id: 2, value: 20, label: 'In Problem',color:"bg-fuchsia-600" },
      ];
  return (
    <div className='flex flex-col w-fit border-gray border-2 text-center rounded-xl overflow-hidden text-white' >
      <h1 className='py-2 border-b-2 border-gray text-xl' >Pipeline</h1>
      <div className='flex flex-col items-cenetr  bg-secondary px-5 py-2 '>
<PieChart
      series={[
        {
          data: [
            { id: 0, value: 40, label: 'Ready',color:"#4ade80" },
            { id: 1, value: 15, label: 'Suspended',color:"#0ea5e9" },
            { id: 2, value: 20, label: 'In Problem',color:"#a21caf" },
          ],
        },
      ]}
      width={400}
      height={200}
      slotProps={{ legend: { hidden:true } }}
    />
    <div className='flex gap-2 px-5 flex-col'>    {
        data.map((item)=>(
            <div key={item.id} className='flex items-center gap-2'>
        <div className={` flex justify-center items-center ${item.color} aspect-square size-8 rounded-full`} > 
        <div className='bg-secondary aspect-square size-5 rounded-full ' > </div></div>
        <div className='flex justify-between w-[70%]'>
            <p>{item.label}</p><p className='text-medium'>{item.value}</p>
        </div>
    </div>
        ))
    }</div>


      </div>
    </div>
  )
}

export default Pipeline

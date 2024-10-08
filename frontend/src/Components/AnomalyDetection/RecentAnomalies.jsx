import React from 'react'
import { anomaliesData } from '../../Data/anomaliesData'

const RecentAnomalies = () => {
  return (
    <div className='bg-secondary text-richblack-5 border-2 rounded-lg text-center border-text02 '>
    <h1 className='bg-primary text-lg px-5 py-2 rounded-t-lg '>Recent ship issues</h1>
    <div className='flex flex-col gap-5 m-5 overflow-y-auto max-h-[55vh]'>
      {
        anomaliesData.map((anomaly)=>(
            anomaly.anomalyType==="Extreme" &&
            <div key={anomaly.mmsi} className='bg-primary px-6 py-4 rounded-lg'>
                <p>{anomaly.date} , {anomaly.time} </p>
                <div className='h-1 w-full border-b-2 border-slate-600' ></div>
                <p>{anomaly.position}</p>
                <div className='h-1 w-full border-b-2 border-slate-600' ></div>
                <p> Speed: {anomaly.speed} knots</p>
            </div>
        ))
      }</div>
    </div>
  )
}

export default RecentAnomalies

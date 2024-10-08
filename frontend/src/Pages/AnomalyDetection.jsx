import React from 'react'
import ShipMap from '../Components/RealtimeMap/ShipMap'
import { ships } from '../Data/shipdata'
import ShipTable from '../Components/RealtimeMap/ShipTable'
import RecentAnomalies from '../Components/AnomalyDetection/RecentAnomalies'
import AnomaliesTable from '../Components/AnomalyDetection/AnomaliesTable'
<ShipTable/>

const AnomalyDetection = () => {
  return (
    <div className=' flex flex-col gap-5 flex-1'>
      <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-yellow-100 to-red-500">
      Anomaly Detection
      </h1><div className='flex justify-between gap-10 items-start'>
      <ShipMap ships={ships} lat={15.0}  lng={-287.0} max={8} min={5} zoom={true} height={"70vh"} width={"80%"} />
      <RecentAnomalies/>
      </div>
      <div className=''><AnomaliesTable/></div>
      <div className='w-fit h-[10rem] text-primary ' >.</div>
    </div>
  )
}

export default AnomalyDetection

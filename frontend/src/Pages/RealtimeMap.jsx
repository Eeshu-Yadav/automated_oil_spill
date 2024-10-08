import React from 'react'
import ShipMap from '../Components/RealtimeMap/ShipMap';
import ShipTable from '../Components/RealtimeMap/ShipTable';
import { ships } from '../Data/shipdata';

const RealtimeMap = () => {


  return (
    <div className=' flex flex-col gap-5 flex-1'>
      <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-red-500">
        Realtime Map
      </h1><div className='flex justify-center items-center'>
      <ShipMap ships={ships} lat={45.0}  lng={-153.0} max={7} min={2} zoom={true} height={"70vh"} width={"90%"}/>
      </div>
      <div className=''><ShipTable/></div>
      <div className='w-fit h-[10rem] text-primary ' >.</div>
    </div>
  )
}

export default RealtimeMap

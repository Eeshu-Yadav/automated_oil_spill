import { useState } from 'react'
import SideNav from './Components/SideNav'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import RealtimeMap from './Pages/RealtimeMap'
import Alert from "./Pages/Alert"
import SatelliteImage from './Pages/SatelliteImage'
import Setting from "./Pages/Setting"
import Records from './Pages/Records'
import "./index.css"
import AnomalyDetection from './Pages/AnomalyDetection'

function App() {

  return (
    <div className='flex bg-navbg w-[100vw] h-[100vh]'>
      <SideNav/>
      {/* MAIN CONTAINER */}
      <div className='customScroll flex flex-1 bg-primary mr-5 my-6 p-10 pt-6 rounded-3xl overflow-y-auto '>
        <Routes>
          <Route path='/' element={<Dashboard/>} ></Route>
          <Route path='/map' element={<RealtimeMap/>} ></Route>
          <Route path='anomaly' element={<AnomalyDetection/>} ></Route>
          <Route path='/alert' element={<Alert/>} ></Route>
          <Route path='/records' element={<Records/>} ></Route>
          <Route path='/satellite' element={<SatelliteImage/>} ></Route>
          <Route path='/setting' element={<Setting/>} ></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App

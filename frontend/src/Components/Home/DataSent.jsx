import React from 'react'

const DataSent = () => {
  return (
    <div className='flex w-fit bg-secondary flex-col border-gray border-2 text-center rounded-xl overflow-hidden text-white' >
      <h1 className='py-2 border-b-2 bg-primary  border-gray text-xl' >Data Sent</h1>
      <div className='flex flex-col items-start   px-12 py-2 '>
        <p>Data sent to satellite</p>
        <p className='text-text02'>Longitude: 23.432.23</p>
        <p className='text-text02'>Latitude: 23.432.23</p>
      </div>
    </div>
  )
}

export default DataSent

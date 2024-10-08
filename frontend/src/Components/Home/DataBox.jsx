import React from 'react'
import received from "../../assets/received.png"
import send from "../../assets/send.png"

const DataBox = ({data}) => {
  return (
    <div className='flex flex-col gap-6 relative text-white pl-3 pb-3 w-60 rounded-xl bg-secondary'>
      <h1 className=' font-semibold text-3xl pt-2'>{data.quatity}</h1>
      <div className='flex items-center pr-2 justify-between'>
        <p className='text-text02'>{data.title}</p>
        {data.value==="Increase"?(<img className=' size-7 aspect-square' src={received}></img>):(<img className=' size-7 aspect-square' src={send}></img>)}
      </div>
      <div className='absolute -top-[4.5px] -right-[5.2px] text-2xl p-2 rounded-full border-primary border-[6px]'><data.icon/></div>
    </div>
  )
}

export default DataBox

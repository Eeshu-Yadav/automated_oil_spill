import React, { useState } from 'react'
import Frame from "../assets/Frame 2.png"

import { NavLink } from 'react-router-dom';
import { NavIcon } from '../Data/NavData';

const SideNav = () => {
  const [tap , setTap]=useState(true);

  return (
    <div className=' text-text02 flex flex-col max-w-[14rem] py-8 px-5'>
      <img className='size-14 aspect-square' onClick={()=>setTap(!tap)} src={Frame}></img>
      <div className='flex flex-col space-y-4 mt-8'>
      {
          NavIcon.map((item, key) => (
            <NavLink 
              key={key} 
              to={item.to}
              className={({ isActive }) => 
                `flex items-center space-x-5 py-2 px-3 rounded-md ${
                  isActive ? 'bg-secondary text-text01' : 'hover:bg-richblack-800 hover:text-text01'
                }`
              }
            >
              <item.icon className="text-lg" />
              {
                tap && <span className='hidden md:flex'>{item.name}</span>
              }
                
              
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default SideNav

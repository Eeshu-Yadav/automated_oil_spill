import React from "react";

const AisStation = () => {
  return (
    <div className="flex w-fit  bg-secondary flex-col border-gray border-2 text-center rounded-xl overflow-hidden text-white">
      <h1 className="py-2 border-b-2 bg-primary  border-gray text-xl">
        AIS Station
      </h1>
      <div className="flex gap-16 justify-between px-5 py-2">
        <div className="space-y-1">
          <p className="text-lg">Online</p>
          <div className="flex items-center justify-center gap-1">
          <div className={` flex justify-center items-center bg-text02 aspect-square size-8 rounded-full`} > 
          <div className='bg-green-300 aspect-square size-5 rounded-full ' > </div></div>
            <p>54</p>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-lg">Offline</p>
          <div className="flex items-center justify-center gap-1">
          <div className={` flex justify-center items-center bg-text02 aspect-square size-8 rounded-full`} > 
          <div className='bg-red-400 aspect-square size-5 rounded-full ' > </div></div>
            <p>23</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AisStation;

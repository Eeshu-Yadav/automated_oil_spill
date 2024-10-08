import React from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';

const oilSpillData = [
  {
    "name": "Ship A",
    "oilSpilled": 4000,
    "containers": 2400,
    "damageAmt": 2400
  },
  {
    "name": "Ship B",
    "oilSpilled": 3000,
    "containers": 1398,
    "damageAmt": 2210
  },
  {
    "name": "Ship C",
    "oilSpilled": 2000,
    "containers": 7800,
    "damageAmt": 2290
  },
  {
    "name": "Ship D",
    "oilSpilled": 2780,
    "containers": 3908,
    "damageAmt": 2000
  },
  {
    "name": "Ship E",
    "oilSpilled": 1890,
    "containers": 4800,
    "damageAmt": 2181
  },
  {
    "name": "Ship F",
    "oilSpilled": 2390,
    "containers": 3800,
    "damageAmt": 2500
  },
  {
    "name": "Ship G",
    "oilSpilled": 3490,
    "containers": 4300,
    "damageAmt": 2100
  }
];

const OilSpill = () => {
  return (
    <div className='text-white '>
    <p className='text-xl font-bold mb-1 bg-gradient-to-r from-blue-100 via-purple-600 to-red-500 text-transparent bg-clip-text '>Oil Spill Over Time</p>
      <AreaChart width={430} height={250} data={oilSpillData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorOilSpilled" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FFD60A" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#FFD60A" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorContainers" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4da6ff" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#4da6ff" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="oilSpilled" stroke="#FFD60A" fillOpacity={1} fill="url(#colorOilSpilled)" />
        <Area type="monotone" dataKey="containers" stroke="#4da6ff" fillOpacity={1} fill="url(#colorContainers)" />
      </AreaChart>
    </div>
  );
};

export default OilSpill;

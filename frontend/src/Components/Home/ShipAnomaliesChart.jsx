import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import "../../App.css"
const years = [
  new Date(1990, 0, 1),
  new Date(1991, 0, 1),
  new Date(1992, 0, 1),
  new Date(1993, 0, 1),
  new Date(1994, 0, 1),
  new Date(1995, 0, 1),
  new Date(1996, 0, 1),
  new Date(1997, 0, 1),
  new Date(1998, 0, 1),
  new Date(1999, 0, 1),
  new Date(2000, 0, 1),
  new Date(2001, 0, 1),
  new Date(2002, 0, 1),
  new Date(2003, 0, 1),
  new Date(2004, 0, 1),
  new Date(2005, 0, 1),
  new Date(2006, 0, 1),
  new Date(2007, 0, 1),
  new Date(2008, 0, 1),
  new Date(2009, 0, 1),
  new Date(2010, 0, 1),
  new Date(2011, 0, 1),
  new Date(2012, 0, 1),
  new Date(2013, 0, 1),
  new Date(2014, 0, 1),
  new Date(2015, 0, 1),
  new Date(2016, 0, 1),
  new Date(2017, 0, 1),
  new Date(2018, 0, 1),
];

const HullDamage = [
  10, 12, 8, 8, 15, 20, 13, 17, 16, 25, 20, 17, 19, 28, 21,
  20, 23, 19, 24, 22, 15, 17, 18, 19, 17, 14, 15, 14, 12,
];

const Collisions = [
  5, 6, 4, 7, 8, 9, 7, 13, 13, 10, 11, 14, 12, 14, 18,
  13, 16, 17, 13, 13, 13, 9, 8, 10, 4, 9, 2, 3, 2,
];

const Groundings = [
  3, 4, 5, 6, 5, 4, 6, 7, 3, 6, 7, 8, 7, 3, 5,
  12, 8, 13, 3, 5, 4, 3, 4, 5, 6, 5, 7, 3, 8,
];

const lineChartsParams = {
  series: [
    {
      label: 'Hull Damage',
      data: HullDamage,
      showMark: false,
    },
    {
      label: 'Collisions',
      data: Collisions,
      showMark: false,
    },
    {
      label: 'Groudings',
      data: Groundings,
      showMark: false,
    },
  ],
  width: 380,
  height: 250,
};

const yearFormatter = (date) => date.getFullYear().toString();

export default function ShipAnomaliesChart() {
  return (
<div className='text-white'>
      <h2 className='text-xl font-bold mb-1 bg-gradient-to-r from-yellow-200 via-purple-400 to-green-500 text-transparent bg-clip-text '>Ship Anomalies Over Time</h2>
      <LineChart className='bg-secondary rounded-lg'
        {...lineChartsParams}
        xAxis={[
          {
            data: years,
            scaleType: 'time',
            valueFormatter: yearFormatter,
            tickColor: 'white', // Set tick color to white
            labelColor: 'white',
          }
        ]}
        series={lineChartsParams.series}
      />
    </div>
  );
}

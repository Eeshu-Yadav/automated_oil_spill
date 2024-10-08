import React from "react";
import DataBox from "../Components/Home/DataBox";
import { Data } from "../Data/dashboardData";
import ShipAnomaliesChart from "../Components/Home/ShipAnomaliesChart";
import OilSpill from "../Components/Home/OilSpill";
import AlertTable from "../Components/Home/AlertTable";
import DataSent from "../Components/Home/DataSent";
import Pipeline from "../Components/Home/Pipeline";
import InTransit from "../Components/Home/InTransit";
import AisStation from "../Components/Home/AisStation";
import ShipMap from "../Components/RealtimeMap/ShipMap";
import { ships } from "../Data/shipdata";
const Dashboard = () => {
  return (
    <div className="w-full space-y-5">
      <h1 className="text-white  text-4xl font-semibold">
        Welcome to dashboard!
      </h1>
      <div className=" flex flex-wrap gap-5 justify-between">
        {Data.map((data, index) => (
          <DataBox key={index} data={data} />
        ))}
      </div>
      {/* GRAPHICAL DATA */}
      <div className=" flex w-full flex-wrap gap-10 items-end justify-between">
        <ShipAnomaliesChart />
        <ShipMap ships={ships} lat={20.0}  lng={-288.0} max={8} min={6} zoom={false} height={"36vh"} width={"25%"}/>
        <OilSpill />
      </div>
      <h1 className="text-xl font-semibold text-white">Alert Table</h1>
      <div className="flex flex-col xl:flex-row gap-10 ">
        <div className="flex gap-10 w-full flex-col justify-between ">
          <AlertTable />
          <div className="flex flex-col md:flex-row gap-5 justify-between">
            <DataSent />
            <InTransit />
            <AisStation />
          </div>
        </div>
        <Pipeline />
      </div>
      <div className='w-fit h-[2rem] bg-primary text-primary ' >.</div>
    </div>
  );
};

export default Dashboard;

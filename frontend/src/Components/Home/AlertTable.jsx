import React from "react";

const AlertTable = () => {
  return (
    <table className="text-white">
      <thead className="rounded-xl">
        <tr className="bg-primary">
          <td className="border text-xl border-gray p-2 text-center align-middle rounded-xl">
            Time Duration
          </td>
          <td className="border text-xl border-gray p-2 text-center align-middle rounded-xl">
            Position
          </td>
          <td className="border text-xl border-gray p-2 text-center align-middle rounded-xl">
            Description
          </td>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-secondary">
          <td className="border border-gray p-2 text-center align-middle">
            30 min ago
          </td>
          <td className="border border-gray p-2 flex">
            <div className="mx-auto">
              <p>Longitude: 23.432.23</p>
              <p>Latitude: 23.542.45</p>
            </div>
          </td>
          <td className="border border-gray p-2 text-center align-middle">
            Some fault in regulating device
          </td>
        </tr>
        <tr className="bg-secondary">
          <td className="border border-gray p-2 text-center align-middle">
            1.5 hrs ago
          </td>
          <td className="border border-gray p-2 flex">
            <div className="mx-auto">
              <p>Longitude: 23.432.23</p>
              <p>Latitude: 23.542.45</p>
            </div>
          </td>
          <td className="border border-gray p-2 text-center align-middle">
            Some fault in regulating device
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AlertTable;

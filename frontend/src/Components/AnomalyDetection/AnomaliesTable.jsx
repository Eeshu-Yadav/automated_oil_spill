import React, { useState } from 'react';
import { anomaliesData } from '../../Data/anomaliesData';
import { GrNext, GrPrevious } from "react-icons/gr";

const AnomaliesTable = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSpeedFilter, setSelectedSpeedFilter] = useState('');
  const [selectedTimeFilter, setSelectedTimeFilter] = useState('');
  const itemsPerPage = 5;

  const filteredShips = anomaliesData.filter(ship => {
    const matchesSearch = ship.name.toLowerCase().includes(search.toLowerCase()) ||
      ship.captain.toLowerCase().includes(search.toLowerCase());

    const matchesSpeedFilter = selectedSpeedFilter === '' || (
      (selectedSpeedFilter === 'below 20 knots' && ship.speed <= 20) ||
      (selectedSpeedFilter === 'above 20 knots' && ship.speed > 20)
    );

    const matchesTimeFilter = selectedTimeFilter === '' || (
      (selectedTimeFilter === 'Low' && ship.anomalyType == 'Low') ||
      (selectedTimeFilter === 'Medium' && ship.anomalyType == 'Medium') ||
      (selectedTimeFilter === 'High' && ship.anomalyType == 'High') ||
      (selectedTimeFilter === 'Extreme' && ship.anomalyType == 'Extreme')
    );

    return matchesSearch && matchesSpeedFilter && matchesTimeFilter;
  });

  const indexOfLastShip = currentPage * itemsPerPage;
  const indexOfFirstShip = indexOfLastShip - itemsPerPage;
  const currentShips = filteredShips.slice(indexOfFirstShip, indexOfLastShip);

  const totalPages = Math.ceil(filteredShips.length / itemsPerPage);

  const handleCancelClick = () => {
    setSearch('');
    setSelectedSpeedFilter('');
    setSelectedTimeFilter('');
  };

  return (
    <div className='text-white'>
      <div className="mt-2 flex items-end gap-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or captain"
          className="p-2 w-[25%] border border-gray-300 rounded bg-secondary"
        />
        <button
          onClick={handleCancelClick}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
        >
          Cancel
        </button>
        <div className="flex ml-20 gap-10">
          <div>
            <label htmlFor="speedFilter">Filter by Speed:</label>
            <select
              id="speedFilter"
              value={selectedSpeedFilter}
              onChange={(e) => setSelectedSpeedFilter(e.target.value)}
              className="p-2 border border-gray-300 rounded bg-secondary text-text01 ml-2"
            >
              <option value="">All</option>
              <option value="below 20 knots">Below 20 knots</option>
              <option value="above 20 knots">Above 20 knots</option>
            </select>
          </div>
          <div>
            <label htmlFor="timeFilter">Filter by Type:</label>
            <select
              id="timeFilter"
              value={selectedTimeFilter}
              onChange={(e) => setSelectedTimeFilter(e.target.value)}
              className="p-2 border border-gray-300 rounded bg-secondary text-text01 ml-2"
            >
              <option value="">All</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Extreme">Extreme</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mb-4 flex justify-between items-end text-text01">
        <span>Total Ships: {filteredShips.length}</span>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setCurrentPage(page => Math.max(page - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-700 text-white rounded"
          >
            <GrPrevious className='text-lg font-bold' />
          </button>
          <span className='text-richblack-5'>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage(page => Math.min(page + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-700 text-white rounded"
          >
            <GrNext className='text-lg font-bold' />
          </button>
        </div>
      </div>

      <table className="min-w-full border-[1px] border-text02 rounded-xl divide-y divide-text02">
        <thead className="bg-secondary rounded-t-xl">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-text01 uppercase tracking-wider">Vessel</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text01 uppercase tracking-wider">Speed</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text01 uppercase tracking-wider">Latitude</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text01 uppercase tracking-wider">Longitude</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text01 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text01 uppercase tracking-wider">Time</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text01 uppercase tracking-wider">Anomaly Type</th>
          </tr>
        </thead>
        <tbody className="bg-primary divide-y divide-text02">
          {currentShips.map((ship) => (
            <tr key={ship.mmsi}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text01">
                {ship.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-text02">{ship.speed} knots</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-text02">{ship.lat}°</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-text02">{ship.lng}°</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-text02">{ship.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-text02">{ship.time}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-text02">{ship.anomalyType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnomaliesTable;

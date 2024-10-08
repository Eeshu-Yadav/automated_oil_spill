import React, { useState } from 'react';
import { ships } from '../../Data/shipdata';
import { GrNext, GrPrevious } from "react-icons/gr";

const ShipTable = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSpeedFilter, setSelectedSpeedFilter] = useState('');
  const [selectedTimeFilter, setSelectedTimeFilter] = useState('');
  const itemsPerPage = 5;



  const filteredShips = ships.filter(ship => {
    const matchesSearch = ship.name.toLowerCase().includes(search.toLowerCase()) ||
      ship.captain.toLowerCase().includes(search.toLowerCase());

    const matchesSpeedFilter = selectedSpeedFilter === '' || (
      (selectedSpeedFilter === 'below 15 knots' && ship.speed < 15) ||
      (selectedSpeedFilter === 'above 20 knots' && ship.speed > 20)
    );

    const matchesTimeFilter = selectedTimeFilter === '' || (
      (selectedTimeFilter === 'last 5 hours' && ship.positionReceived <=5) ||
      (selectedTimeFilter === 'last 10 hours' && ship.positionReceived <=10) ||
      (selectedTimeFilter === 'last 15 hours' && ship.positionReceived <=15) ||
      (selectedTimeFilter === 'last 24 hours' && ship.positionReceived <=24)
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
    <div className='text-white '>
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
            <option value="below 15 knots">Below 15 knots</option>
            <option value="above 20 knots">Above 20 knots</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeFilter">Filter by Time:</label>
          <select
            id="timeFilter"
            value={selectedTimeFilter}
            onChange={(e) => setSelectedTimeFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded bg-secondary text-text01 ml-2"
          >
            <option value="">All</option>
            <option value="last 5 hours">Last 5 hours</option>
            <option value="last 10 hours">Last 10 hours</option>
            <option value="last 15 hours">Last 15 hours</option>
            <option value="last 24 hours">Last 24 hours</option>

          </select>
        </div>
      </div>
      </div>
      

      {/* Display total number of filtered ships */}
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

      <table className="min-w-full border border-text02 rounded-xl divide-y divide-text02">
        <thead className="bg-secondary rounded-xl">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-text01 uppercase tracking-wider">Vessel</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text01 uppercase tracking-wider">Speed</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text01 uppercase tracking-wider">Latitude</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text01 uppercase tracking-wider">Longitude</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text01 uppercase tracking-wider">Destination</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text01 uppercase tracking-wider">Position Received</th>
          </tr>
        </thead>
        <tbody className="bg-primary divide-y divide-text02">
          {currentShips.map((ship) => (
            <tr key={ship.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text01">
                <div className="flex items-center">
                  {/* Replace with actual image URL */}
                  <img src={`data:image/jpeg;base64,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`} alt={ship.name} className="w-12 h-12 mr-3" />
                  <div>
                    <div className="font-bold">{ship.name}</div>
                    <div className="text-xs">{ship.captain}</div>
                    <div className="text-xs">{ship.id}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-text01">{ship.speed} knots</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-text01">{ship.lat}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-text01">{ship.lng}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-text01">{ship.destination}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-text01">{ship.positionReceived} hours ago</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShipTable;

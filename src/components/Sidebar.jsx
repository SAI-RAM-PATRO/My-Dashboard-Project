import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-orange-500 text-white">
      <div className="p-4 text-lg">Dashboard</div>
      <ul className="p-4">
        <li className="py-2">
          <Link to="/">Customer Management</Link>
        </li>
        <li className="py-2">
          <Link to="/stats">Customer Stats</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

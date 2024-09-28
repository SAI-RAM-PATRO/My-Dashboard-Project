import React from 'react';
import { useSelector } from 'react-redux';

const CustomerStatsPage = () => {
  const { customers } = useSelector((state) => state.customers);

  return (
    <div>
      <h2 className="text-2xl mb-4">Customer Statistics</h2>
      <p>Total Customers: {customers.length}</p>
      {/* Add more stats as needed */}
    </div>
  );
};

export default CustomerStatsPage;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers, addCustomer, deleteCustomer } from '../redux/customerSlice';

const CustomerManagementPage = () => {
  const dispatch = useDispatch();
  const { customers, loading } = useSelector((state) => state.customers);
  const [newCustomer, setNewCustomer] = useState('');

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const handleAddCustomer = () => {
    if (newCustomer) {
      dispatch(addCustomer({ name: newCustomer }));
      setNewCustomer('');
    }
  };

  const handleDeleteCustomer = (id) => {
    dispatch(deleteCustomer(id));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl mb-4">Customer Management</h2>
      <input
        type="text"
        value={newCustomer}
        onChange={(e) => setNewCustomer(e.target.value)}
        placeholder="Add a new customer"
        className="border p-2 mb-4"
      />
      <button onClick={handleAddCustomer} className="bg-orange-500 text-white px-4 py-2 mb-4">
        Add Your Customer 
      </button>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id} className="flex justify-between items-center">
            <span>{customer.name}</span>
            <button
              onClick={() => handleDeleteCustomer(customer.id)}
              className="bg-red-500 text-white px-2 py-1"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerManagementPage;

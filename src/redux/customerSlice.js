import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  customers: [],
  loading: false,
  error: null,
};

export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', async () => {
  const response = await axios.get('http://localhost:5000/customers');
  return response.data;
});

export const addCustomer = createAsyncThunk('customers/addCustomer', async (customer) => {
  const response = await axios.post('http://localhost:5000/customers', customer);
  return response.data;
});

export const deleteCustomer = createAsyncThunk('customers/deleteCustomer', async (id) => {
  await axios.delete(`http://localhost:5000/customers/${id}`);
  return id;
});

const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.loading = false;
        state.customers = action.payload;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addCustomer.fulfilled, (state, action) => {
        state.customers.push(action.payload);
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.customers = state.customers.filter(customer => customer.id !== action.payload);
      });
  },
});

export default customerSlice.reducer;

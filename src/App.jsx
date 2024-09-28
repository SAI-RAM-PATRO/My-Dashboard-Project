import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerManagementPage from './pages/CustomerManagementPage';
import CustomerStatsPage from './pages/CustomerStatsPage';
import Sidebar from './components/Sidebar';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-grow p-4">
            <Routes>
              <Route path="/" element={<CustomerManagementPage />} />
              <Route path="/stats" element={<CustomerStatsPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

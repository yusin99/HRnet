import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
// import EmployeeList from './pages/EmployeeList'; // Create this component
import EmployeeList from './pages/EmployeeList/employeeList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-list" element={<EmployeeList />} /> {/* Placeholder */}
      </Routes>
    </Router>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/header';
import { Button } from './../../components/Button/button';
import './employeeList.css';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage, setEmployeesPerPage] = useState(5);

  useEffect(() => {
    // Retrieve employee data from local storage when the component mounts
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  // Calculate the indices of the employees to display on the current page
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle change in employees per page
  const handleEmployeesPerPageChange = (e) => {
    setEmployeesPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when per page option changes
  };

  // Calculate total pages
  const totalPages = Math.ceil(employees.length / employeesPerPage);

  return (
    <div id="employee-div" className="container">
      <Header />
      <div className='currentEmployeesContainer'>
      <h2>Current Employees</h2>
      <Button text="Back to Home" link="/" />
      </div>
      
      {employees.length > 0 ? (
        <>
          <div className="pagination-controls">
            <label htmlFor="employeesPerPage">Employees per page:</label>
            <select
              id="employeesPerPage"
              value={employeesPerPage}
              onChange={handleEmployeesPerPageChange}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>
          <table id="employee-table" className="display">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Start Date</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {currentEmployees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.dateOfBirth}</td>
                  <td>{employee.startDate}</td>
                  <td>{employee.street}</td>
                  <td>{employee.city}</td>
                  <td>{employee.state}</td>
                  <td>{employee.zipCode}</td>
                  <td>{employee.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
}

export default EmployeeList;

// TODO: Recherche  + намаляне на страници
// TODO: Redux au lieu de localStorage
// TODO: Le tri au niveau du tableau (one parameter at time)
// TODO: Tri + Search faire fonctionner 
// TODO: Counter employees displayed (dynamic)
// TODO: Modifier selector 10 25 50 100

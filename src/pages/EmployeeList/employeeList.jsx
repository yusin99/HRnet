import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/header';
import { Button } from '../../components/Button/button';
import './employeeList.css';
import { useSelector } from 'react-redux';

function EmployeeList() {
  const employees = useSelector((state) => state.employees.employees);

  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage, setEmployeesPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState({ key: '', direction: '' });


  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortOption.key === key && sortOption.direction === 'asc') {
      direction = 'desc';
    }
    setSortOption({ key, direction });
  };

  const sortEmployees = (employees) => {
    return [...employees].sort((a, b) => {
      const valueA = a[sortOption.key].toLowerCase();
      const valueB = b[sortOption.key].toLowerCase();
  
      if (sortOption.direction === 'asc') {
        return valueA.localeCompare(valueB, undefined, { sensitivity: 'base' });
      } else {
        return valueB.localeCompare(valueA, undefined, { sensitivity: 'base' });
      }
    });
  };

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) =>
      value.toString().toLowerCase().includes(searchQuery)
    )
  );

  const sortedEmployees = sortOption.key ? sortEmployees(filteredEmployees) : filteredEmployees;

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEmployeesPerPageChange = (e) => {
    setEmployeesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(sortedEmployees.length / employeesPerPage);

  // Calculate dynamic values
  const totalEmployees = filteredEmployees.length;
  const startEmployee = indexOfFirstEmployee + 1;
  const endEmployee = Math.min(indexOfLastEmployee, totalEmployees);

  return (
    <div id="employee-div" className="container">
      <Header />
      <div className='currentEmployeesContainer'>
        <h2>Current Employees</h2>
        <Button text="Back to Home" link="/" />
      </div>

      {employees.length > 0 ? (
        <>
          <div className="search-and-filter">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <div className="pagination-controls">
              <label htmlFor="employeesPerPage">Employees per page:</label>
              <select
                id="employeesPerPage"
                value={employeesPerPage}
                onChange={handleEmployeesPerPageChange}
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
          </div>

          {/* Dynamic Text Display */}
          <div className="dynamic-text">
            Showing {startEmployee} to {endEmployee} of {totalEmployees} employees
          </div>

          <table id="employee-table" className="display">
            <thead>
              <tr>
                <th onClick={() => handleSort('firstName')}>
                  First Name {sortOption.key === 'firstName' && (sortOption.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('lastName')}>
                  Last Name {sortOption.key === 'lastName' && (sortOption.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('dateOfBirth')}>
                  Date of Birth {sortOption.key === 'dateOfBirth' && (sortOption.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('startDate')}>
                  Start Date {sortOption.key === 'startDate' && (sortOption.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('street')}>
                  Street {sortOption.key === 'street' && (sortOption.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('city')}>
                  City {sortOption.key === 'city' && (sortOption.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('state')}>
                  State {sortOption.key === 'state' && (sortOption.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('zipCode')}>
                  Zip Code {sortOption.key === 'zipCode' && (sortOption.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('department')}>
                  Department {sortOption.key === 'department' && (sortOption.direction === 'asc' ? '↑' : '↓')}
                </th>
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



// TODO: Recherche  + намаляне на страници XXX
// TODO: Redux au lieu de localStorage XXX
// TODO: Le tri au niveau du tableau (one parameter at time) XXXX
// TODO: Tri + Search faire fonctionner  XXX 
// TODO: Counter employees displayed (dynamic) XXX
// TODO: Modifier selector 10 25 50 100 XXX

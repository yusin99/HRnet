import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [department, setDepartment] = useState<string>('Sales');

  const saveEmployee = () => {
    // Logic to save employee (you can use localStorage or a mock API)
    alert('Employee Created!');
  };

  return (
    <div className="container">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <a onClick={() => navigate('/employee-list')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
        View Current Employees
      </a>
      <h2>Create Employee</h2>
      <form onSubmit={(e) => { e.preventDefault(); saveEmployee(); }}>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input type="date" id="date-of-birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />

        <label htmlFor="start-date">Start Date</label>
        <input type="date" id="start-date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" value={street} onChange={(e) => setStreet(e.target.value)} />

          <label htmlFor="city">City</label>
          <input id="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} />

          <label htmlFor="state">State</label>
          <select id="state" value={state} onChange={(e) => setState(e.target.value)}>
            <option value="">Select a state</option>
            <option value="CA">California</option>
            <option value="NY">New York</option>
            {/* Add more states as options */}
          </select>

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select id="department" value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="HR">Human Resources</option>
          <option value="Legal">Legal</option>
        </select>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Home;

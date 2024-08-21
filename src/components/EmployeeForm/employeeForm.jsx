import React, { useState } from 'react';
import "../EmployeeForm/employeeForm.css"
import { Button } from '../Button/button';


function EmployeeForm ({ onSave }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [startDate, setStartDate] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [department, setDepartment] = useState('Sales');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave();
  };

  return (
    <div className='formContainer'>
      <div className='formHeader'>
      <h3>Create Employee</h3>
      <Button text="Current Employees" link="/employee-list"/>
      </div>
    <form className='employeeForm' onSubmit={handleSubmit}>
      <label htmlFor="first-name">First Name</label>
      <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

      <label htmlFor="last-name">Last Name</label>
      <input type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />

      <label htmlFor="date-of-birth">Date of Birth</label>
      <input type="date" id="date-of-birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />

      <label htmlFor="start-date">Start Date</label>
      <input type="date" id="start-date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

      <label htmlFor="street">Street</label>
      <input id="street" type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
      
      <fieldset className="address">
        <legend>More info</legend>
        <div className='fieldsetContainer'>
        <label htmlFor="city">City</label>
        <input id="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className='fieldsetContainer'>
        <label htmlFor="state">State</label>
        <select id="state" value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">Select a state</option>
          <option value="CA">California</option>
          <option value="NY">New York</option>
          {/* Add more states as options */}
        </select>
        </div>
        <div className='fieldsetContainer'>
        <label htmlFor="zip-code">Zip Code</label>
        <input id="zip-code" type="number" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
        </div>

      </fieldset>

      <label htmlFor="department">Department</label>
      <select id="department" value={department} onChange={(e) => setDepartment(e.target.value)}>
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
        <option value="Engineering">Engineering</option>
        <option value="HR">Human Resources</option>
        <option value="Legal">Legal</option>
      </select>

      <Button text="Save" link={false}/>
    </form>
    </div>
  );
};

export default EmployeeForm;

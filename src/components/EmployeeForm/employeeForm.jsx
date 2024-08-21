import React, { useState } from 'react';
import "../EmployeeForm/employeeForm.css";
import { Button } from '../Button/button';
import { Modal } from 'oc-custom-modal-react';

export default function EmployeeForm({ onSave }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: 'Sales',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const customModalStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: '20px',
  };

  const customTextStyles = {
    color: '#333',
    fontSize: '16px',
    lineHeight: '1.5',
  };

  const customContentStyles = {
    color: '#333',
    textAlign: 'center',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing employee data from local storage
    const existingEmployees = JSON.parse(localStorage.getItem('employees')) || [];

    // Add the new employee to the existing array
    existingEmployees.push(formData);

    // Save the updated array back to local storage
    localStorage.setItem('employees', JSON.stringify(existingEmployees));

    // Trigger the success modal
    setIsModalOpen(true);

    // Optionally reset the form fields
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      startDate: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      department: 'Sales',
    });

    if (onSave) {
      onSave();
    }
  };

  return (
    <div className='formContainer'>
      <div className='formHeader'>
        <h3>Create Employee</h3>
        <Button text="Current Employees" link="/employee-list" />
      </div>
      <form className='employeeForm' onSubmit={handleSubmit}>
        {/* Form Fields */}
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input type="date" id="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />

        <label htmlFor="startDate">Start Date</label>
        <input type="date" id="startDate" value={formData.startDate} onChange={handleChange} />

        <label htmlFor="street">Street</label>
        <input id="street" type="text" value={formData.street} onChange={handleChange} />

        <fieldset className="address">
          <legend>More info</legend>
          <div className='fieldsetContainer'>
            <label htmlFor="city">City</label>
            <input id="city" type="text" value={formData.city} onChange={handleChange} />
          </div>
          <div className='fieldsetContainer'>
            <label htmlFor="state">State</label>
            <select id="state" value={formData.state} onChange={handleChange}>
              <option value="">Select a state</option>
              <option value="CA">California</option>
              <option value="NY">New York</option>
              {/* Add more states as options */}
            </select>
          </div>
          <div className='fieldsetContainer'>
            <label htmlFor="zipCode">Zip Code</label>
            <input id="zipCode" type="number" value={formData.zipCode} onChange={handleChange} />
          </div>
        </fieldset>

        <label htmlFor="department">Department</label>
        <select id="department" value={formData.department} onChange={handleChange}>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="HR">Human Resources</option>
          <option value="Legal">Legal</option>
        </select>

        <Button text="Save" />
      </form>
      {isModalOpen && 
      <Modal
          onClose={() => setIsModalOpen(false)}
          title="Employee created successfully"
          modalStyles={customModalStyles}
          contentStyles={customContentStyles}
          textStyles={customTextStyles}
          isClosable={false}  // or false if you don't want the close button or outside click to work
        >
          <p>This is the custom content inside the modal.</p>
          <button onClick={() => setIsModalOpen(false)} className='button'>Close Modal</button>
        </Modal>}
    </div>
  );
}

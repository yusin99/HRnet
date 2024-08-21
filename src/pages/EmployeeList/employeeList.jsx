import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/header';
import { Button } from './../../components/Button/button';

function EmployeeList() {
  return (
    <div id="employee-div" class="container">
            <Header />
            <h1>Current Employees</h1>
            <table id="employee-table" class="display"></table>
            <Button text="Back to Home" link="/"/>
    </div>
  );
}

export default EmployeeList
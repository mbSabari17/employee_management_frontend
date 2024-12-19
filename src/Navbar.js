import React, { useState } from 'react';
import './Navbar.css';
import EmployeeList from './EmployeeList';

const Navbar = () => 
    {
        const [showEmployeeList, setShowEmployeeList] = useState(false);
        const handleListClick = () => {
            setShowEmployeeList(true); // Set the state to show the employee list
          };
  return (
    <div>
    <nav className="navbar">
      <h1 className="navbar-title">Employee Management</h1>
      <div className="navbar-buttons">
      <button className="navbar-button" onClick={handleListClick}>List</button>
        <button className="navbar-button">Create</button>
        <button className="navbar-button">Delete</button>
      </div>
    </nav>
    {showEmployeeList && <EmployeeList />}
    </div>
  );
};

export default Navbar;

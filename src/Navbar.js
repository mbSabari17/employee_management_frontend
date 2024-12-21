import React, { useState } from 'react';
import './Navbar.css';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';
import EmployeeDelete from './EmployeeDelete';

const Navbar = () => {
  const [showEmployeeList, setShowEmployeeList] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const handleCreateClick = () => {
    setShowCreate(true);
    setShowEmployeeList(false);
    setShowDelete(false);
  }
  const handleListClick = () => {
    setShowEmployeeList(true);
    setShowCreate(false);
    setShowDelete(false);
  };
  const handleDeleteClick = () => {
    setShowDelete(true);
    setShowCreate(false);
    setShowEmployeeList(false);
  }
  return (
    <div>
      <nav className="navbar">
        <h1 className="navbar-title">Employee Management</h1>
        <div className="navbar-buttons">
          <button className="navbar-button" onClick={handleListClick}>List</button>
          <button className="navbar-button" onClick={handleCreateClick}>Create</button>
          <button className="navbar-button" onClick={handleDeleteClick}>Delete</button>
        </div>
      </nav>
      {showEmployeeList && <EmployeeList />}
      {showCreate && <EmployeeCreate />}
      {showDelete && <EmployeeDelete />}
    </div>
  );
};

export default Navbar;

import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Inspira</h2>
      <ul className="sidebar-menu">
        <Link to='/dashboard'><li className="sidebar-item active">Dashboard</li></Link>
        <Link to='/chatbot'><li className="sidebar-item">Chatbot</li></Link>
        <li className="sidebar-item">Billing</li>
        <li className="sidebar-item">RTL</li>
        <li className="sidebar-heading">Account Pages</li>
        <li className="sidebar-item">Profile</li>
        <li className="sidebar-item">Sign In</li>
        <li className="sidebar-item">Sign Up</li>
      </ul>
    </div>
  );
}

export default Sidebar;

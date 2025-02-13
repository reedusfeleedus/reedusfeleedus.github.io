import React, { useState } from 'react';
import FileMenu from '../menus/FileMenu';
import EditMenu from '../menus/EditMenu';
import ViewMenu from '../menus/ViewMenu';
import SearchMenu from '../menus/SearchMenu';
import TerminalMenu from '../menus/TerminalMenu';
import HelpMenu from '../menus/HelpMenu';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <nav className="navbar">
      <div 
        className={`menu-item ${activeMenu === 'file' ? 'active' : ''}`}
        onClick={() => handleMenuClick('file')}
      >
        File
        {activeMenu === 'file' && (
          <div className="dropdown-menu">
          <MenuItem label="Bio" onClick={() => {/* Handle bio click */}} />
          <MenuItem label="Resume" onClick={() => {/* Handle resume click */}} />
          <MenuItem label="Contact" onClick={() => {/* Handle contact click */}} />
        </div>
        )}
      </div>
      <div 
        className={`menu-item ${activeMenu === 'edit' ? 'active' : ''}`}
        onClick={() => handleMenuClick('edit')}
      >
        Edit
        {activeMenu === 'edit' && <EditMenu />}
      </div>
      {/* Similar structure for View, Search, Terminal, and Help */}
    </nav>
  );
};

export default Navbar;
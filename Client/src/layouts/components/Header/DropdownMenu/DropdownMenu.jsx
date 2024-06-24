import React from 'react';
import './DropdownMenu.css';

function DropdownMenu({ children }) {
  return (
    <div className="dropdown-menu">
      {children}
    </div>
  );
}

export default DropdownMenu;
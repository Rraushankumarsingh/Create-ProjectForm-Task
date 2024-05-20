import React from 'react';

const DropdownMenu = ({ setSection }) => {
  return (
    <div className="dropdown-menu ml-4">
      <button onClick={() => setSection('CREATE_PROJECT')}>Create Project</button>
      <br />
      <br/>
      <button onClick={() => setSection('MANAGE_PROJECT')}>Manage Project</button>
    </div>
  );
};

export default DropdownMenu;

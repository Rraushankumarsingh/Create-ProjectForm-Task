import React, { useState } from 'react';
import Menu from './components/Menu';
import Dashboard from './components/Dashboard';
import Company from './components/Company';
import CreateProject from './components/CreateProject';
import ManageProject from './components/ManageProject';
import Reporting from './components/Reporting';
import Administration from './components/Administration';
import './App.css';

const App = () => {
  const [section, setSection] = useState('DASHBOARD');

  const renderSection = () => {
    switch (section) {
      case 'DASHBOARD':
        return <Dashboard />;
        
      case 'COMPANY':
        return <Company />;
      case 'CREATE_PROJECT':
        return <CreateProject />;
      case 'MANAGE_PROJECT':
        return <ManageProject />;
      case 'REPORTING':
        return <Reporting />;
      case 'ADMINISTRATION':
        return <Administration />;
      default:
        return null;
    }
  };

  return (
    <>
    <div className="app">
      <div className="left-section">
        <Menu setSection={setSection} />
      </div>
      <div className="right-section">
        {renderSection()}
      </div>
    </div>
    </>
  );
};

export default App;

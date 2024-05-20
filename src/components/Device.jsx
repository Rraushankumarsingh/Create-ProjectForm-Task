import React, { useState } from 'react';
import '../style.css';

const Device = () => {
  const [deviceFilter, setDeviceFilter] = useState({
    mobile: false,
    tablet: false,
    desktop: false
  });

  const [options, setOptions] = useState({
    getSurvey: false,
    fraudDetection: false
  });

  const handleDeviceFilterChange = (e) => {
    const { name, checked } = e.target;
    setDeviceFilter({ ...deviceFilter, [name]: checked });
  };

  const handleOptionsChange = (e) => {
    const { name, checked } = e.target;
    setOptions({ ...options, [name]: checked });
  };

  return (
    <div className="device-container">
      <div className="card1">
        <h3 className="style-header"><span style={{marginLeft:"10px",fontWeight:"bold"}}>DEVICE</span></h3>
        <div className="devices" style={{paddingLeft:'2rem'}}>
          <label>
            <input
              type="checkbox"
              name="mobile"
              checked={deviceFilter.mobile}
              onChange={handleDeviceFilterChange}
            /> <span style={{marginLeft:"8px"}}>Mobile</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="tablet"
              checked={deviceFilter.tablet}
              onChange={handleDeviceFilterChange}
            /> <span style={{marginLeft:"8px"}}>Tablet</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="desktop"
              checked={deviceFilter.desktop}
              onChange={handleDeviceFilterChange}
            /> <span style={{marginLeft:"8px"}}>Desktop</span>
          </label>
        </div>
      </div>

      <div className="card2">
        <h3 className="style-header"><span style={{marginLeft:"10px",fontWeight:"bold"}}>FILTER OPTIONS</span></h3>
        <div className="options" style={{paddingLeft:'2rem'}}>
          <label>
            <input
              type="checkbox"
              name="getSurvey"
              checked={options.getSurvey}
              onChange={handleOptionsChange}
            /><span style={{marginLeft:"8px"}}>GetSurvey</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="fraudDetection"
              checked={options.fraudDetection}
              onChange={handleOptionsChange}
            /> <span style={{marginLeft:"8px"}}>FraudDetection</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Device;

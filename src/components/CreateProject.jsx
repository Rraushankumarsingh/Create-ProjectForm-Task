import React, { useState } from 'react';
import Device from './Device';
import ProjectDetails from './ProjectDetails';
import { GoArrowLeft } from "react-icons/go";

const CreateProject = () => {
  const [projectInfo, setProjectInfo] = useState({
    projectName: '',
    workOrderNo: '',
    projectType: '',
    category: '',
    client: '',
    clientContact: '',
    salesPerson: '',
    projectManager: '',
    projectDescription: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectInfo({ ...projectInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', JSON.stringify(projectInfo, null, 2));
  };

  return (
    <>
      <div className="create-project">
      <div>
        <button style={{ display:'flex', backgroundColor:"gray",color:"white",width:"auto",height:"auto",borderRadius:"5px",alignItems:"center",paddingRight:"12px",paddingLeft:"10px",gap:"5px",justifyContent:"center"}}>         
          <GoArrowLeft/> Back        
        </button>
</div>


        <h2 className='style-header' style={{width:'49.9rem',fontWeight:"bold",marginLeft:"1px"}}><span style={{marginLeft:"10px"}}>PROJECT INFORMATION*</span></h2>
        <form onSubmit={handleSubmit}>
          <div className='div-flex'>
            <div>
              <label>Project Name *</label>
              <input type="text" placeholder='Project Name' name="projectName" value={projectInfo.projectName} onChange={handleInputChange} required />
            </div>
            <div>
              <label>Work Order No. *</label>
              <input type="text" placeholder='Work Order No' name="workOrderNo" value={projectInfo.workOrderNo} onChange={handleInputChange} required />
            </div>
          </div>
          <div className='div-flex'>
            <div>
              <label>Project Type *</label>
              <select name="projectType" value={projectInfo.projectType} onChange={handleInputChange} required>
                <option value="" disabled>Please Select</option>
                <option value="Type 1">Type 1</option>
                <option value="Type 2">Type 2</option>
                <option value="Type 3">Type 3</option>
                <option value="Type 4">Type 4</option>
                <option value="Type 5">Type 5</option>
              </select>
            </div>
            <div>
              <label>Category</label>
              <select name="category" value={projectInfo.category} onChange={handleInputChange}>
                <option value="" disabled>Please Select</option>
              </select>
            </div>
            <div>
              <label>Client</label>
              <select name="client" value={projectInfo.client} onChange={handleInputChange}>
                <option value="" disabled>Select a client</option>
              </select>
            </div>
          </div>
          <div className='div-flex'>
            <div>
              <label>Client's Contact</label>
              <select name="clientContact" value={projectInfo.clientContact} onChange={handleInputChange}>
                <option value="" disabled>Please Select</option>
              </select>
            </div>
            <div>
              <label>Sales Person</label>
              <select name="salesPerson" value={projectInfo.salesPerson} onChange={handleInputChange}>
                <option value="" disabled>Please Select</option>
              </select>
            </div>
            <div>
              <label>Project Manager</label>
              <select name="projectManager" value={projectInfo.projectManager} onChange={handleInputChange}>
                <option value="" disabled>Please Select</option>
              </select>
            </div>
          </div>
          <div>
            <label style={{position:"absolute"}}>Project Description</label>
            <br></br>
            <textarea name="projectDescription" placeholder='Project Description' value={projectInfo.projectDescription} onChange={handleInputChange}></textarea>
          </div>

          <Device />

          <ProjectDetails />

          <div className="form-buttons">
            <button type="button" className="cancel-button">Cancel</button>
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProject;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import "../Projectcss.css";

const ProjectDetails = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  console.log(selectedCountries,"selectedCountries")

  const [specifications, setSpecifications] = useState([
    {
      country: "",
      language: "",
      targetGroup: "",
      cpi: "",
      loi: "",
      ir: "",
      completes: "",
    },
  ]);

  console.log(specifications,"specifications")

  
  const countries = [
    { value: "Brazil", label: "Brazil",lan:"Brazil" },
    { value: "USA", label: "USA" ,lan:'Us-english'},
    { value: "India", label: "India",lan:'Hindi' },
    { value: "Pakistan", label: "Pakistan",lan:'Hindi' },
  ];

  const handleSpecificationChange = (index, field, value) => {
    
    const newSpecifications = [...specifications];
    newSpecifications[index][field] = value;
    setSpecifications(newSpecifications);
  };

  const handleAddSpecification = (index) => {
    const findNewIndex = specifications.filter((item, i)=>i === index);
    
    setSpecifications([
      ...specifications,
      ...findNewIndex
    ]);
  };

  const handleRemoveSpecification = (index) => {
    const newSpecifications = specifications.filter((_, i) => i !== index);
    setSpecifications(newSpecifications);
  };

  return (
    <div>
      <h3 className="style-header " style={{marginLeft:"1px"}}>
        <span style={{ marginLeft: "10px", fontWeight: "bold" }}>REGIONS</span>
      </h3>
      <div>
        <label>Country</label>
        <Select
          options={countries}
          isMulti

          value={specifications}
          onChange={setSpecifications}
        />
      </div>
      <h3 className="style-header ml-1">
        {" "}
        <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
          SPECIFICATIONS*
        </span>
      </h3>
      <table className="specifications-table">
        <thead>
          <tr>
            <th>Sel.</th>
            <th>Country</th>
            <th>Language</th>
            <th>Target Group</th>
            <th>CPI</th>
            <th>LOI</th>
            <th>IR</th>
            <th>Completes</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
        {console.log(specifications,"specifications")}
          {specifications.map((spec, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{spec.label}</td>
              <td>{spec.lan}</td>
              <td>
                <input
                  type="text"
                  value={spec.targetGroup}
                  onChange={(e) =>
                    handleSpecificationChange(
                      index,
                      "targetGroup",
                      e.target.value
                    )
                  }
                />
                <span>

                <button
                  type="button"
                  onClick={() => handleRemoveSpecification(index)}
                  style={{
                    backgroundColor: "red",
                    border: "1px solid #fff", 
                    borderRadius: "50%",
                    padding: "3px", 
                    marginRight: "3px", 
                    marginLeft:"12px"
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} style={{ color: "#fff" }} />{" "}
                  
                </button>
                <button
                  type="button"
                  onClick={()=>handleAddSpecification(index)}
                  style={{
                    backgroundColor: "green",
                    border: "1px solid #fff", 
                    borderRadius: "50%", 
                    padding: "3px", 
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#fff" }} />{" "}
                 
                </button>
                </span>
              </td>
              <td>
                <input
                  type="text"
                  value={spec.cpi}
                  onChange={(e) =>
                    handleSpecificationChange(index, "cpi", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={spec.loi}
                  onChange={(e) =>
                    handleSpecificationChange(index, "loi", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={spec.ir}
                  onChange={(e) =>
                    handleSpecificationChange(index, "ir", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={spec.completes}
                  onChange={(e) =>
                    handleSpecificationChange(
                      index,
                      "completes",
                      e.target.value
                    )
                  }
                />
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectDetails;

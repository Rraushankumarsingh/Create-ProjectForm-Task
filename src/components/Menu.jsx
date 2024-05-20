import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaChartBar,
  FaBuilding,
  FaClipboardList,
  FaCog,
  FaUser,
} from "react-icons/fa"; 
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import DropdownMenu from "./DropdownMenu";

const Menu = ({ setSection }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="menu , m-5">
      <button onClick={() => setSection("DASHBOARD")}>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ paddingTop: "3px" }}>
            <FaChartBar />
          </div>
          <div> Dashboard </div>
          <div style={{ marginLeft: "140px" }}>
            {" "}
            <IoIosArrowForward />
          </div>
        </div>
      </button>
      <br />
      <br />

      <button onClick={() => setSection("COMPANY")}>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ paddingTop: "4px" }}>
            {" "}
            <FaBuilding />
          </div>
          <div> Company</div>
          <div style={{ marginLeft: "150px" }}>
            {" "}
            <IoIosArrowForward />
          </div>
        </div>
      </button>
      <br />
      <br />
      <div className="dropdown">
        <button onClick={() => handleMenuClick("PROJECT")}>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ paddingTop: "4px" }}>
              {" "}
              <FaClipboardList />
            </div>
            Project{" "}
            <div style={{ marginLeft: "165px" }} > {openMenu === "PROJECT" ? (
              <IoIosArrowDown />
            ) : (
              <IoIosArrowForward />
            )}</div>
           {" "}
          </div>
        </button>
        {openMenu === "PROJECT" && <DropdownMenu setSection={setSection} />}
      </div>
      <br />
      <br />
      <button onClick={() => setSection("REPORTING")}>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ paddingTop: "4px" }}>
            <FaChartBar />
          </div>
          <div>Reporting</div>
          <div style={{ marginLeft: "150px" }} ><IoIosArrowForward /></div>
          
        </div>
      </button>
      <br />
      <br />
      <button onClick={() => setSection("ADMINISTRATION")}>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ paddingTop: "4px" }}>
            <FaCog />
          </div>
          <div> Administration</div>
          <div style={{ marginLeft: "115px" }} > <IoIosArrowForward /></div>
         
         
        </div>
      </button>
    </div>
  );
};

export default Menu;

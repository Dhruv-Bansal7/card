// src/components/Dashboard.js
import React, { useState } from "react";
import EmployeeList from "./EmployeeList";
import './Dashboard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch , faChevronDown } from "@fortawesome/free-solid-svg-icons";

import user from "../image/user.jpg";

const employeesData = [
  { id: 1, name: "Johnson Wood", role: "Front End Developer", email: "johnsonwood@microsoft.com", image: "../image/user.jpg" },
  { id: 2, name: "John Doe", role: "Team Lead", email: "johndoe@microsoft.com", image: "../image/user.jpg" },
  { id: 3, name: "Fakhar Naveed", role: "UI/UX Designer", email: "fakhar@microsoft.com", image: "../image/user.jpg" },
  { id: 4, name: "Alex Made", role: "Software Engineer", email: "alexmade@microsoft.com", image: "../image/user.jpg" },
  { id: 5, name:  "Johnson Wood", role: "Front End Developer", email: "johnsonwood@microsoft.com", image: "../image/user.jpg" },
  { id: 6, name: "John Doe", role: "Team Lead", email: "johndoe@microsoft.com", image: "../image/user.jpg" },
];

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredEmployees = employeesData.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="searchBar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="login"> 
            <img src={user} alt="" className="employee"/>
            <h3>Fakhar Naveed</h3>
            <FontAwesomeIcon icon={faChevronDown} className="down-icon" />
        </div>
      </div>
      <div className="sub-header">  
          <div>
            <h2>Employees</h2>
          </div>

          <div className="filter-buttons">
            <button onClick={() => setFilter("All")}>All</button>
            <button onClick={() => setFilter("Active")}>Active</button>
            <button onClick={() => setFilter("Inactive")}>Inactive</button>
          </div>
      </div>
      <EmployeeList employees={filteredEmployees} />
    </div>
  );
};

export default Dashboard;

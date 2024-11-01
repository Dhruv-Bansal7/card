// src/components/EmployeeList.js
import React from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({ employees }) => {
  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          name={employee.name}
          role={employee.role}
          email={employee.email}
          image={employee.image}
        />
      ))}
    </div>
  );
};

export default EmployeeList;


import React from "react";
import "./EmployeeCard.css";
import user from "../image/user.jpg"

const EmployeeCard = ({ name, role, email, image }) => {
  return (
    <div className="employee-card">
      <div>
        <img src={user} className="employee-image" />
      </div>
      <div>
        <div className="head">
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
        <p>Email: {email}</p>
        <div className="card-actions">
          <button className="block-btn">Block</button>
          <button className="details-btn">Details</button>
        </div>
      </div>
    </div>  
  );
};

export default EmployeeCard;

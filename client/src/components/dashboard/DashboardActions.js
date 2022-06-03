import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaBlackTie, FaGraduationCap } from "react-icons/fa";

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn btn-light">
        <div className="sign">
          <FaUserCircle color="#17a2b8" />
          <span className="m-l"> Edit Profile</span>
        </div>
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        <div className="sign">
          <FaBlackTie color="#17a2b8" />
          <span className="m-l">Add Experience</span>
        </div>
      </Link>
      <Link to="/add-education" className="btn btn-light">
        <div className="sign">
          <FaGraduationCap color="#17a2b8" size="20px" />
          <span className="m-l-small"> Add Education</span>
        </div>
      </Link>
    </div>
  );
};

export default DashboardActions;

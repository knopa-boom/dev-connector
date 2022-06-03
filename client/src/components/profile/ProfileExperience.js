import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileExperience = ({
  experience: { company, title, to, from, description },
}) => (
  <div>
    <h3 className="text-dark">{company}</h3>
    <p>
      <Moment className="exp-from" format="YYYY/MM/DD">{from}</Moment>-
      {!to ? (
        <span className="exp-to">Now</span>
      ) : (
        <Moment className="exp-to" format="YYYY/MM/DD">
          {to}
        </Moment>
      )}
    </p>
    <p>
      <strong>Position:</strong> {title}
    </p>
    {description && (
      <p>
        <strong>Description:</strong> {description}
      </p>
    )}
  </div>
);
ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;

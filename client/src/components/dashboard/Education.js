import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";

const Education = ({ education }) => {
  const educations = education.map((edc) => (
    <tr key={edc._id}>
      <td>{edc.school}</td>
      <td className="hide-sm">{edc.degree}</td>
      <td>
        <Moment format="YYYY/MM/DD">{edc.form}</Moment> -
        {edc.to === null ? (
          "Now"
        ) : (
          <Moment format="YYYY/MM/DD">{edc.to}</Moment>
        )}
      </td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  ));
  return (
    <section>
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </section>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
};

export default Education;

import React, { Fragment } from "react";
import { FaCode } from "react-icons/fa";

import { FaUser } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">Profiles</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <FaUser size="13px" />
          <span className="m-l">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link onClick={logout} to="/">
          <span className="logout-icon-wrap">
            <TbLogout size="17px" />
          </span>
          <span className="hide-sm logout-text">Logout</span>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <span className="logo-wrap">
            <FaCode />
          </span>
          <span className="logo-title">DevConnector</span>
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

// State auth
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);

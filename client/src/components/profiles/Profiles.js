import React, { useEffect, Fragment } from "react";
import { FaConnectdevelop } from "react-icons/fa";

import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";

import { connect } from "react-redux";
import { getProfiles } from "../../actions/profile";
import PropTypes from "prop-types";


const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
    <section className="container">
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <span>
              <FaConnectdevelop size="19px" />
            </span>
            <span className="m-l">Browse and connect with developers</span>
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </section>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);

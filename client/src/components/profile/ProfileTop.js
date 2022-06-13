import React from "react";
import PropTypes from "prop-types";

import { FaGlobe } from "react-icons/fa";
import {
  ImYoutube,
  ImInstagram,
  ImTwitter,
  ImFacebook2,
  ImLinkedin,
} from "react-icons/im";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { avatar, name },
  },
}) => {
  return (
    <div className="profile-top bg-primary p-2">
      <img className="round-img my-1" src={avatar} alt="avatar" />
      <h1 className="large">{name}</h1>
      <p className="lead">
        {status} {company && <span>at {company}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div className="icons my-1">
        {website && (
          <a
            className="social"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe />
          </a>
        )}

        {social && social.twitter && (
          <a
            className="social"
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImTwitter />
          </a>
        )}

        {social && social.facebook && (
          <a
            className="social"
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImFacebook2 />
          </a>
        )}

        {social && social.linkedin && (
          <a
            className="social"
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImLinkedin />
          </a>
        )}

        {social && social.youtube && (
          <a
            className="social"
            href={social.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImYoutube />
          </a>
        )}

        {social && social.instagram && (
          <a
            className="social"
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImInstagram />
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;

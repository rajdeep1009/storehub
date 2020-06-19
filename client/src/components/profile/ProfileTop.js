import React from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div className="profile-top">
      <div className="bg-primary p-2">
        <img className="round-img my-1" src={avatar} alt="Profile Image" />
        <h1 className=" large">{name}</h1>
        <p className="lead">
          {status} at {company}
        </p>
        <p>{location}</p>
        <div className="icons my-1">
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-globe fa-2x p-1"></i>
            </a>
          )}
          {social && social.twitter && (
            <a href={social.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter fa-2x p-1"></i>
            </a>
          )}
          {social && social.facebook && (
            <a href={social.facebook} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook fa-2x p-1"></i>
            </a>
          )}
          {social && social.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin fa-2x p-1"></i>
            </a>
          )}
          {social && social.instagram && (
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram fa-2x p-1"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;

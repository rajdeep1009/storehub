import React from "react";
import PropTypes from "prop-types";

const ProfileSkills = (props) => {
  return (
    <div class="profile-edu bg-white p-2">
      <h2 class="text-primary">Education</h2>
      <div>
        <h3>Graduate B.Tech</h3>
        <p>August 2010 - July 2014</p>
        <p>
          <strong>Stream: </strong> Computer Science
        </p>
        <p>
          <strong>Projects: </strong>Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Mollitia sapiente autem repudiandae deserunt
          pariatur fugiat.
        </p>
      </div>
    </div>
  );
};

ProfileSkills.propTypes = {};

export default ProfileSkills;

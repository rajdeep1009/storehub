import React from "react";
import PropTypes from "prop-types";

const ProfileProducts = (props) => {
  return (
    <div class="profile-exp bg-white p-2">
      <h2 class="text-primary">Experiences</h2>
      <div>
        <h3>TCS</h3>
        <p>Oct 2016 - Current</p>
        <p>
          <strong>Postion: </strong> Developer
        </p>
        <p>
          <strong>Description: </strong>Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Mollitia sapiente autem repudiandae deserunt
          pariatur fugiat.
        </p>
      </div>
      <div>
        <h3>Cognizant</h3>
        <p>Oct 2014 - Sept 2016</p>
        <p>
          <strong>Postion: </strong> Junior Developer
        </p>
        <p>
          <strong>Description: </strong>Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Mollitia sapiente autem repudiandae deserunt
          pariatur fugiat.
        </p>
      </div>
    </div>
  );
};

ProfileProducts.propTypes = {};

export default ProfileProducts;

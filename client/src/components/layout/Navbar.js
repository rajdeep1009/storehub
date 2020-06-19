import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout, loadUser } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">
          <i className="fa fa-hdd-o"></i>{" "}
          <span className="hide-sm">Stores</span>
        </Link>
      </li>
      <li>
        <Link to="/posts">
          <i className="fa fa-clipboard"></i> <span className="hide-sm">Posts</span>
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fa fa-user"></i>{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <a onClick={logout}>
            <i className="fa fa-sign-out"></i>{" "}
            <span className="hide-sm">Logout</span>
          </a>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Stores</Link>
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
    <nav className="navbar bg-primary">
      <h1>
        <Link to="/">
          <i className="fa fa-shopping-basket"></i> StoreHub
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);

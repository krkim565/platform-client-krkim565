import {
  BrowserRouter as NavLink,
} from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { signoutUser } from '../actions';

const NavBar = (props) => {
  const renderSomeSection = () => {
    if (props.authenticated) {
      return (
        <button type="button" onClick={() => props.signoutUser(props.history)}>Sign Out</button>
      );
    }
    return null;
  };
  return (
    <nav className="nav-bar">
      <NavLink style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'white',
        width: '10vw',
        marginRight: '5px',
      }}
        exact
        to="/"
      >
        My Recipedia
      </NavLink>
      <NavLink style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'white',
        width: '10vw',
        marginLeft: '5px',
      }}
        to="/posts/new"
      >
        Post Recipe
      </NavLink>
      <NavLink style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'white',
        width: '10vw',
        marginLeft: '5px',
      }}
        to="/signin"
      >
        Sign In
      </NavLink>
      <NavLink style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'white',
        width: '10vw',
        marginLeft: '5px',
      }}
        to="/signup"
      >
        Sign Up
      </NavLink>
      {renderSomeSection()}
    </nav>
  );
};

const mapStateToProps = (reduxState) => ({
  authenticated: reduxState.auth.authenticated,
});

export default connect(mapStateToProps, { signoutUser })(NavBar);

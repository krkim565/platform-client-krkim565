import { NavLink, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signoutUser } from '../actions';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

     signOut = () => {
       console.log('Signout');
       console.log(this.props);
       this.props.signoutUser(this.props.history);
     };

       renderSomeSection = () => {
         if (this.props.authenticated) {
           // console.log(this.props);
           return (
             <button type="button" onClick={this.signOut}>Sign Out</button>
           );
         }
         return null;
       };

       render() {
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
             {this.renderSomeSection()}
           </nav>
         );
       }
}

const mapStateToProps = (reduxState) => ({
  authenticated: reduxState.auth.authenticated,
});

export default withRouter(connect(mapStateToProps, { signoutUser })(NavBar));

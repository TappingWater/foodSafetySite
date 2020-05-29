import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class NavigationBar extends Component {

  constructor(props) {
    super(props);
    this.mobileMenu = this.mobileMenu.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  mobileMenu() {
    var x = document.getElementById("navBar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  signOut = e => {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    return (
      <div>
        <div id="titleBar">
          <h1>Food Safety Information Site</h1>
          <h5>Providing the Latest in Produce Safety Regulations</h5>
        </div>
        <nav id="navBar" className="topNav">
          <div id = "menuIcon">
            <a href="#" className="icon" onClick={this.mobileMenu}>
              <i className="fa fa-bars"></i>
            </a>
          </div>
          <div id="navBarLeft">
            <NavLink to="/"><div className="navItem">Home</div></NavLink>
            <NavLink to="/faq"><div className="navItem">FAQ</div></NavLink>
            <NavLink to="/recall"><div className="navItem">Food Recalls</div></NavLink>
            {this.props.auth.isAuthenticated && (
              <NavLink to="/survey"><div className="navItem">Survey</div></NavLink>
            )}
          </div>
          <div id="navBarRight">
            {this.props.auth.isAuthenticated && (
              <div>
                <NavLink to="/profile"><div className="navItem">Profile</div></NavLink>
                {this.props.auth.user.admin && (
                  <NavLink to="/adminUpdate"><div className="navItem">Admin Update</div></NavLink>
                )}
                <NavLink onClick={this.signOut} to="/"><div className="navItem">Sign Out</div></NavLink>
              </div>
            )}
            {!this.props.auth.isAuthenticated && (
              <div>
                <NavLink to="/register"><div className="navItem">Sign Up</div></NavLink>
                <NavLink to="/signIn"><div className="navItem">Log In</div></NavLink>
              </div>
            )}
          </div>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(NavigationBar);

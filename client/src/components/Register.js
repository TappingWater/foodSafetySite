import React, { Component } from 'react'
import './css/SignInPage.css'
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";
//import axios from 'axios'

class Register extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.state = {
      email: "",
      username: "",
      firstname: "",
      lastname: "",
      farmname: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState.errors !== nextProps.errors) {
      return {
        errors: nextProps.errors
      };
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
    this.setState({ errors: {} });
  }

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      username: this.state.username,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      farmname: this.state.farmname,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
    window.scrollTo(0, 0);
    this.setState({
      errors: {}
    });
  }

  onCancel() {
    window.scrollTo(0, 0);
    this.props.history.push("/");
  }

    render() {
      const { errors } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <div className="container">
                    <h1>Sign Up</h1>

                    <p>Please fill in this form to create an account.</p>
                    <hr/>
                    <div>
                      <label htmlFor="email"><b>Email</b></label>
                      <input
                        type="text"
                        placeholder="Enter Email"
                        value={this.state.email}
                        onChange={this.onChange}
                        id="email"
                        name="email"
                        required
                        className={classnames("", { invalid: errors.email })}
                      />
                      <div className="red-text">
                        {errors.email}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="username"><b>Username</b></label>
                      <input
                        type="text"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.onChange}
                        id="username"
                        name="username"
                        required
                        className={classnames("", { invalid: errors.username })}
                      />
                      <div className="red-text">
                        {errors.username}
                      </div>
                    </div>

                    <div id="firstLastBlock">
                      <div id="firstNameBlock">
                        <label htmlFor="firstname"><b>First Name</b></label>
                        <input
                          type="text"
                          placeholder="First Name"
                          value={this.state.firstname}
                          onChange={this.onChange}
                          id="firstname"
                          name="firstname"
                          required
                          className={classnames("", { invalid: errors.firstname })}
                        />
                      </div>
                      <div id="lastNameBlock">
                        <label htmlFor="lastname"><b>Last Name</b></label>
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={this.state.lastname}
                          onChange={this.onChange}
                          id="lastname"
                          name="lastname"
                          required
                          className={classnames("", { invalid: errors.lastname })}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="farmname"><b>Farm Name (Optional)</b></label>
                      <input
                        type="text"
                        placeholder="Farm Name"
                        value={this.state.farmname}
                        onChange={this.onChange}
                        id="farmname"
                        name="farmname"
                      />
                    </div>

                    <div>
                      <label htmlFor="psw"><b>Password</b></label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={this.onChange}
                        id="password"
                        name="psw"
                        required
                        className={classnames("", { invalid: errors.password })}
                      />
                      <div className="red-text">
                        {errors.password}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                      <input
                        type="password"
                        placeholder="Repeat Password"
                        value={this.state.password2}
                        onChange={this.onChange}
                        id="password2"
                        name="psw-repeat"
                        required
                        className={classnames("", { invalid: errors.password2 })}
                      />
                      <div className="red-text">
                        {errors.password2}
                      </div>
                    </div>

                    <label>
                        <input type="checkbox" name="remember"/> Remember me
                    </label>

                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                    <div className="clearfix">
                        <button type="button" onClick={this.onCancel} className="cancelbtn">Cancel</button>
                        <button type="submit" className="signupbtn">Sign Up</button>
                    </div>
                </div>
            </form>
        )
    }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

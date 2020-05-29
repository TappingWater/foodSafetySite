import React, { Component } from 'react';
import './css/SignInPage.css';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";

class SignIn extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.state = {
      email: "",
      password: "",
      errors: {},
      isLoggedIn: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated && !this.state.isLoggedIn) {
      this.props.history.push("/"); // push user to home when they login
      this.setState({isLoggedIn: true});
    }
    if(!nextProps.auth.isAuthenticated && this.state.isLoggedIn) {
      this.setState({isLoggedIn: false});
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitLogin = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    window.scrollTo(0, 0);
  };

  onCancel() {
    this.props.history.push("/");
    window.scrollTo(0, 0);
  }

    render() {
      const { errors } = this.state;
        return (
            <form onSubmit={this.submitLogin}>
                <div className="container">
                    <h2 className="loginHeader"> Please Sign In Below:</h2>
                    <label htmlFor="email"><b>Email</b></label>
                    <input
                      type="text"
                      placeholder="Enter Email"
                      value={this.state.emailField}
                      onChange={this.onChange}
                      id="email"
                      name="email"
                      required
                      className={classnames("", { invalid: errors.email || errors.emailnotfound })}
                    />
                    <span className="red-text">{ errors.email } { errors.emailnotfound }</span>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      value={this.state.password}
                      onChange={this.onChange}
                      id="password"
                      name="psw"
                      required
                      className={classnames("", { invalid: errors.password || errors.passwordincorrect})}
                    />
                    <span className="red-text">{ errors.password } { errors.passwordincorrect }</span>

                    <button type="submit" className="loginbtn">Login</button>
                    <label>
                        <input type="checkbox" name="remember"/> Remember me
                    </label>
                </div>

                <div className="container">
                    <button type="button" onClick={this.onCancel} className="cancelbtn">Cancel</button>
                </div>
            </form>
        )
    }
}

SignIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(SignIn));

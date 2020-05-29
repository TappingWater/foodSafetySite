import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { profileUser, changeProfile } from "../actions/authActions";
import { getPSRSurvey, getPCRSurvey, getPSurvey } from "../actions/surveyActions";
import './css/ProfilePage.css';
import classnames from "classnames";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.props.profileUser();
    this.props.getPSRSurvey();
    this.props.getPCRSurvey();
    this.props.getPSurvey();
    this.state = {
      prof: {},
      email: "",
      newUsername: "",
      newFirstname: "",
      newLastname: "",
      newFarmname: "",
      psrStatus: "",
      pcrStatus: "",
      pReferences: [],
      errors: {}
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.prof.profile !== prevState.prof && (!!(prevState.prof))) {
      return{
        prof: nextProps.prof.profile,
        email: nextProps.prof.profile.email,
        newUsername: nextProps.prof.profile.username,
        newFirstname: nextProps.prof.profile.firstname,
        newLastname: nextProps.prof.profile.lastname,
        newFarmname: nextProps.prof.profile.farmname
      };
    }
    if (nextProps.errors !== prevState.errors) {
      return {
        errors: nextProps.errors
      };
    }
    if (nextProps.psrsurv.profile.result !== prevState.psrStatus) {
      return {
        psrStatus: nextProps.psrsurv.profile.result
      };
    }
    if (nextProps.pcrsurv.profile.result !== prevState.pcrStatus) {
      return {
        pcrStatus: nextProps.pcrsurv.profile.result
      };
    }
    if (nextProps.psurv.profile !== prevState.pReferences) {
      return {
        pReferences: nextProps.psurv.profile
      };
    }
    return null;
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
    this.setState({ errors: {} });
  }

  onSubmit = e => {
    e.preventDefault();
    const editUser = {
      email: this.state.email,
      username: this.state.newUsername,
      firstname: this.state.newFirstname,
      lastname: this.state.newLastname,
      farmname: this.state.newFarmname
    };
    this.props.changeProfile(editUser, this.props.history);
    window.scrollTo(0, 0);
    this.setState({
      errors: {}
    });
  }

  onCancel() {
    window.scrollTo(0, 0);
    this.props.history.push("/profile");
  }

  render() {
    const { errors } = this.state;
    let listItems = "You have NOT filled out the questionnaire. Please navigate to the survey page and complete the Food Product Types Selector questionnaire.";
    if(this.state.pReferences.length > 0) {
      listItems = this.state.pReferences.map(link => {
        return this.state.pReferences.length > 0 ?
          <li>
            <a href={link}>{link}</a>
          </li>
        :
          <p>Unexpected Error. If you did NOT complete the survey, please navigate back to the survey page.</p>
      });
    }
    return (
      <div id="profileContainer">
        <div id="profileBar">
          <h2>Profile</h2>
        </div>
        <div id="profileInfo">
          <h3>User Information</h3>

          <h5>Email: {this.state.prof.email}</h5>

          <form onSubmit={this.onSubmit}>
            <div className = "changeProfileBar">
              <label htmlFor="newUsername"><b>Username</b></label>
              <input
                type="text"
                placeholder="Enter Your Desired Username"
                value={this.state.newUsername || ''}
                onChange={this.onChange}
                id="newUsername"
                name="newUsername"
                required
                className={classnames("", { invalid: errors.newUsername })}
              />
              <div className="red-text">
                {errors.newUsername}
              </div>
            </div>

            <div className = "changeProfileBar">
              <label htmlFor="newFirstname"><b>First Name</b></label>
              <input
                type="text"
                placeholder="Enter Your First Name"
                value={this.state.newFirstname || ''}
                onChange={this.onChange}
                id="newFirstname"
                name="newFirstname"
                required
                className={classnames("", { invalid: errors.newFirstname })}
              />
              <div className="red-text">
                {errors.newFirstname}
              </div>
            </div>

            <div className = "changeProfileBar">
              <label htmlFor="newLastname"><b>Last Name</b></label>
              <input
                type="text"
                placeholder="Enter Your Last Name"
                value={this.state.newLastname || ''}
                onChange={this.onChange}
                id="newLastname"
                name="newLastname"
                required
                className={classnames("", { invalid: errors.newLastname })}
              />
              <div className="red-text">
                {errors.newLastname}
              </div>
            </div>

            <div className = "changeProfileBar">
              <label htmlFor="newFarmname"><b>Farm Name (Optional)</b></label>
              <input
                type="text"
                placeholder="Enter Your Farm Name"
                value={this.state.newFarmname || ''}
                onChange={this.onChange}
                id="newFarmname"
                name="newFarmname"
              />
            </div>
            <div id="buttonsSect">
              <button type="button" onClick={this.onCancel} className="cancelBtn">Cancel</button>
              <button type="submit" className="saveBtn">Save Changes</button>
            </div>
          </form>
        </div>
        <div id="profileSurvey">
          <h3>Personalized Resources List and Statuses</h3>
            <h5>Your survey results indicated the following concerning the Produce Safety Rule:</h5>
            <div className={this.state.psrStatus && this.state.psrStatus.includes("NOT") ? ("redBoxStatus") : ("greenBoxStatus")}>
              {this.state.psrStatus || ''}
            </div>
            <h5>Your survey results indicated the following concerning the Preventive Controls Rule:</h5>
            <div className={this.state.pcrStatus && this.state.pcrStatus.includes("NOT") ? ("redBoxStatus") : ("greenBoxStatus")}>
              {this.state.pcrStatus || ''}
            </div>
            <h5>Based on your survey results, these are some helpful links for you:</h5>
            <div className={ listItems && listItems.includes("NOT") ? ("redBoxStatus") : ("listLinks")}>
              {listItems}
            </div>
        </div>
      </div>
    )
  }
}

Profile.propTypes = {
  profileUser: PropTypes.func.isRequired,
  getPSRSurvey: PropTypes.func.isRequired,
  getPCRSurvey: PropTypes.func.isRequired,
  getPSurvey: PropTypes.func.isRequired,
  prof: PropTypes.object.isRequired,
  psrsurv: PropTypes.object.isRequired,
  pcrsurv: PropTypes.object.isRequired,
  psurv: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  prof: state.prof,
  psrsurv: state.psrsurv,
  pcrsurv: state.pcrsurv,
  psurv: state.psurv,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { profileUser, changeProfile, getPSRSurvey, getPCRSurvey, getPSurvey }
)(withRouter(Profile));

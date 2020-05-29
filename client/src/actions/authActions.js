import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  PROFILE_REQUESTED_SUCCEEDED
} from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/signIn")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage
// Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      console.log(err.message);
      dispatch({
        type: GET_ERRORS,
        payload: err.message
      })}
    );
};
// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
// Profile of user
export const profileUser = () => dispatch => {
  const token = localStorage.getItem('jwtToken').split(" ")[1];
  axios
    .get("/api/users/profile/" + token,
    {
      params: {
        token: localStorage.getItem('jwtToken')
      }
    })
    .then(res => {
      dispatch({
        type: PROFILE_REQUESTED_SUCCEEDED,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.message
      })}
    );
};
// Change Profile Info
export const changeProfile = (newUserData, history) => dispatch => {
  const token = localStorage.getItem('jwtToken').split(" ")[1];
  axios
    .put("/api/users/profile/edit/" + token, newUserData)
    .then(res => {
      history.push("/profile");
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.message
      })}
    );
}
